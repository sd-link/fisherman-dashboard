import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOverviewComponent } from './global-overview.component';

describe('GlobalOverviewComponent', () => {
  let component: GlobalOverviewComponent;
  let fixture: ComponentFixture<GlobalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
