import {Injectable, TemplateRef} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  active = false;
  activeChange: Subject<boolean> = new Subject<boolean>();

  private template : TemplateRef<any> | null = null;

  constructor() {
    this.activeChange.subscribe( (value:boolean) => {
      this.active = value;
    })
  }

  open(template: TemplateRef<any>) {
    this.template = template;
    this.activeChange.next(true);
  }

  close() {
    this.activeChange.next(false);
  }

  getTemplate(): TemplateRef<any> | null {
    return this.template;
  }
}
