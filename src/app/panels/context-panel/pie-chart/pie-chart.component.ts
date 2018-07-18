import { Component, ElementRef, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { timeout } from '../../../../../node_modules/@types/q';

declare var jQuery: any;
declare var d3: any;
declare var DonutCharts: any;
declare var $: any;

@Component({
  selector: 'pieChart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges  {

  @ViewChild('pieChart') pieChart: ElementRef;
  @Input() data: Object;

  constructor() { }
  
  ngOnInit() {    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.drawChart();
  }

  drawChart() {
    let donuts = new DonutCharts('#pie_chart');
    donuts.create(this.data);
  
  }
}
