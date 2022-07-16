import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {faInfoCircle, faLink} from "@fortawesome/pro-solid-svg-icons";

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  faFont = {
    faLink,
    faInfoCircle
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
