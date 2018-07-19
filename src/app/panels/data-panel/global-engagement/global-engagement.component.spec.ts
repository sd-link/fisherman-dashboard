import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEngagementComponent } from './global-engagement.component';

describe('GlobalEngagementComponent', () => {
  let component: GlobalEngagementComponent;
  let fixture: ComponentFixture<GlobalEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
