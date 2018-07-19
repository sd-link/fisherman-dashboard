import { Component, OnInit } from '@angular/core';
import { Constants } from '../../common/constants'
@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.scss']
})
export class DataPanelComponent implements OnInit {

  currentView: number;
  currentTab: number;
  constants: object;

  constructor() { }
  
  ngOnInit() {
    this.constants = Constants;
    this.currentTab = Constants.VIEW_GLOBAL;
    this.currentView = Constants.TAB_OVERVIEW;
  }

}
