import { Component, OnInit } from '@angular/core';
import {faArrowLeftToLine} from "@fortawesome/pro-solid-svg-icons";

@Component({
  selector: 'app-confidentialite',
  templateUrl: './confidentialite.component.html',
  styleUrls: ['./confidentialite.component.scss']
})
export class ConfidentialiteComponent implements OnInit {

  faFont = {
    faArrowLeftToLine
  }

  constructor() { }

  ngOnInit(): void {
  }

}
