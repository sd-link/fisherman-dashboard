import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChatterComponent } from './global-chatter.component';

describe('GlobalChatterComponent', () => {
  let component: GlobalChatterComponent;
  let fixture: ComponentFixture<GlobalChatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalChatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
