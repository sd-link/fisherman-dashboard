import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextPanelComponent } from './context-panel.component';

describe('ContextPanelComponent', () => {
  let component: ContextPanelComponent;
  let fixture: ComponentFixture<ContextPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
