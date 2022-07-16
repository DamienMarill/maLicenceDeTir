import { Component, OnInit } from '@angular/core';
import {DarkModeService} from "../../shared/services/dark-mode.service";
import {DataService} from "../../shared/services/data.service";
import {faArrowRightFromBracket, faArrowsRotate} from "@fortawesome/pro-solid-svg-icons";
import { Router } from '@angular/router';
import {LayerService} from "../../shared/layout/layer/layer-service.service";
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faFont = {
    faArrowRightFromBracket,
    faArrowsRotate
  }
  public version: string = packageJson.version;

  constructor(
    public darkModeService: DarkModeService,
    public dataService: DataService,
    private router: Router,
    public layerService: LayerService
  ) { }

  ngOnInit(): void {
  }

  toggleDark(){
    console.log('toggleDark');
    this.darkModeService.toggleTheme();
  }

  logout(){
    this.dataService.clearDatas();
    this.router.navigate(['/login']);
    this.layerService.close();
  }
}
