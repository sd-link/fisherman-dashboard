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

@NgModule({
  declarations: [
    AppComponent,
    EntryPanelComponent,
    ContextPanelComponent,
    DataPanelComponent,
    BubbleChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
