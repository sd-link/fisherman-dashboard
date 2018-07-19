import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConsumptionComponent } from './global-consumption.component';

describe('GlobalConsumptionComponent', () => {
  let component: GlobalConsumptionComponent;
  let fixture: ComponentFixture<GlobalConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
