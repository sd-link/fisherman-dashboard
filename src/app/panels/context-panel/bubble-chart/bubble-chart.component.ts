import { Component, ElementRef, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

declare var jQuery: any;
declare var D3Bubbles: any;
declare var d3: any;
declare var $: any;

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})

export class BubbleChartComponent implements OnInit, OnChanges {
  
  @Input() chartWidth: number;
  @Input() chartHeight: number;
  @Input() data: Object;
  
  @ViewChild('wrapper') wrapper: ElementRef;

  chartId: string;

  constructor() { }

  ngOnInit() {    
    this.chartId = Math.floor(Date.now() * Math.random()).toString(36);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.drawChart();
  }

  drawChart() {
    d3.select(this.wrapper.nativeElement).attr('id', `wrapper_${this.chartId}`)

    let bubbles = new D3Bubbles({
      wrapper: `#wrapper_${this.chartId}`,
      container: `#wrapper_${this.chartId} .plot`,
      bubbles: {
        bubbles_per_px: 0.02,
        bubbles_max: 'auto'
      },
      width: this.chartWidth,
      height: this.chartHeight,
      colors: {
        bubbles:['#FFC400', '#DD2C00'],
        texts:['#FFF'],
      },
      radius: {
        min: 20,
        max: 80
      },
      features: {
        dragmove: true,
        overflow: false,
        fit_texts: true
      },
      data: this.data
    });

    bubbles.init();
    bubbles.visualize();
  }

}
