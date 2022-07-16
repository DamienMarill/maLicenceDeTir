import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EanComponent } from './ean.component';

describe('EanComponent', () => {
  let component: EanComponent;
  let fixture: ComponentFixture<EanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
