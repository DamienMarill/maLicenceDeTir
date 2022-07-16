import { Component, OnInit } from '@angular/core';
import * as JsBarcode from "jsbarcode";
import {DataService} from "../../shared/services/data.service";
import {timer} from "rxjs";
import {faInfoCircle} from "@fortawesome/pro-solid-svg-icons";

@Component({
  selector: 'app-ean',
  templateUrl: './ean.component.html',
  styleUrls: ['./ean.component.scss']
})
export class EanComponent implements OnInit {

  faFont = {
    faInfoCircle,
  }

  constructor(
    public dataService: DataService
  ) { }

  async ngOnInit(): Promise<void> {
    if (this.dataService.licence) {
      await timer(10)
      JsBarcode("#barcode", this.dataService.licence.codeEan, {
        width: 1.5,
        height: 60,
        displayValue: false,
      })
    }

  }

}
