import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {faEnvelope, faGlobe, faLocationDot, faPhone} from "@fortawesome/pro-solid-svg-icons";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  faFont = {
    faLocationDot,
    faPhone,
    faEnvelope,
    faGlobe,
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
