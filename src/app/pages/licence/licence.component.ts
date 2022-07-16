import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {faArrowsRotate, faBarcode, faQrcode} from "@fortawesome/pro-solid-svg-icons";

import * as moment from 'moment';
import {LayerService} from "../../shared/layout/layer/layer-service.service";

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss']
})
export class LicenceComponent implements OnInit {

  faFont = {
    faQrcode,
    faBarcode,
    faArrowsRotate,
  }

  constructor(
    public dataService: DataService,
    public layerService: LayerService,
  ) { }

  ngOnInit(): void {
  }

  licenceIsValid(): boolean{
    if (this.dataService.licence){
      return moment().isBefore(moment(this.dataService.licence.endSeasonCustom));
    }
    return false;
  }

}
