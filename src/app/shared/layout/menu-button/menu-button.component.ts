import {Component, OnInit, ViewChild} from '@angular/core';
import {faBars, faEllipsisVertical, faTimes} from "@fortawesome/pro-solid-svg-icons";
import {LayerService} from "../layer/layer-service.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  faFont ={
    faTimes,
    faEllipsisVertical
  }
  active = false;
  tourbilol = false;

  @ViewChild('menu', {static: false}) menu: any;

  constructor(
    public layerService: LayerService
  ) {
    this.layerService.activeChange.subscribe( (value:boolean) => {
      if (value !== this.active) {
        this.tourbilol = true;
        timer(250).subscribe( () => {
          this.active = value;
        })
        timer(500).subscribe( () => {
          this.tourbilol = false;
          this.active = layerService.active;
        })
      }

    })
  }

  ngOnInit(): void {
  }

  toggle() {
    if (this.active){
      this.layerService.close();
    }else {
      this.layerService.open(this.menu);
    }
  }
}
