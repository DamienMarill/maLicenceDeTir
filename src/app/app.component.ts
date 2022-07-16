import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./shared/services/data.service";
import {Router} from "@angular/router";
import {DarkModeService} from "./shared/services/dark-mode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maLicenceDeTir';

  constructor(
    private dataService: DataService,
    private router: Router,
    private darkModeService: DarkModeService,
  ) {
    if (dataService.islogged()){
      router.navigate(['/']);
    }
  }
}
