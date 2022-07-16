import {Component, OnInit, ViewChild} from '@angular/core';
import {LayerService} from "./layer-service.service";
import * as moment from "moment";


@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  @ViewChild('container', {static: false}) container: any;
  @ViewChild('layer', {static: false}) layer: any;

  initScroll = 0;
  inScroll = false;

  constructor(
    public layerService: LayerService
  ) { }

  ngOnInit(): void {
  }

  swipe(event: any) {
    this.layerService.close();
  }

  startScroll(event:any){
    this.initScroll = this.container.nativeElement.scrollTop;
    this.inScroll = true;
  }

  scroll(event:any){
    this.container.nativeElement.scrollTop = this.initScroll - event.deltaY;
    if(this.container.nativeElement.scrollTop <= 0){
      if (event.deltaY - this.initScroll >= 0){
        this.layer.nativeElement.style.transform = 'translateY('+(event.deltaY - this.initScroll )+'px)';
      }
    }

    // const delta = event.srcElement.scrollTop - this.oldScrollState;
    // console.log('scroll', delta, moment().valueOf());
    // this.oldScrollState = event.srcElement.scrollTop;
  }

  endScroll(event:any){
    if (event.deltaY - this.initScroll > window.innerHeight/3){
      this.swipe(event);
    }
    if (event.velocityY > 2){
      this.swipe(event);
    }
    this.layer.nativeElement.style.transform = null;
    this.inScroll = false;
  }

}
