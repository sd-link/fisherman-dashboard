import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntryPanelComponent } from './panels/entry-panel/entry-panel.component';
import { ContextPanelComponent } from './panels/context-panel/context-panel.component';
import { DataPanelComponent } from './panels/data-panel/data-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryPanelComponent,
    ContextPanelComponent,
    DataPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
