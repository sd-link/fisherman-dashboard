import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPanelComponent } from './entry-panel.component';

describe('EntryPanelComponent', () => {
  let component: EntryPanelComponent;
  let fixture: ComponentFixture<EntryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
