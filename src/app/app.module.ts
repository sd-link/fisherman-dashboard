import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntryPanelComponent } from './panels/entry-panel/entry-panel.component';
import { ContextPanelComponent } from './panels/context-panel/context-panel.component';
import { DataPanelComponent } from './panels/data-panel/data-panel.component';
import { MyDatePickerModule } from 'mydatepicker';
import { BubbleChartComponent } from './panels/context-panel/bubble-chart/bubble-chart.component';
import { PieChartComponent } from './panels/context-panel/pie-chart/pie-chart.component';
import { DataTableModule } from 'angular-6-datatable';
import { GlobalOverviewComponent } from './panels/data-panel/global-overview/global-overview.component';
import { GlobalConsumptionComponent } from './panels/data-panel/global-consumption/global-consumption.component';
import { GlobalChatterComponent } from './panels/data-panel/global-chatter/global-chatter.component';
import { GlobalEngagementComponent } from './panels/data-panel/global-engagement/global-engagement.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryPanelComponent,
    ContextPanelComponent,
    DataPanelComponent,
    BubbleChartComponent,
    PieChartComponent,
    GlobalOverviewComponent,
    GlobalConsumptionComponent,
    GlobalChatterComponent,
    GlobalEngagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule,
    DataTableModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
