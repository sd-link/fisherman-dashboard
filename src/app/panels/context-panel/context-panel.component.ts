import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-context-panel',
  templateUrl: './context-panel.component.html',
  styleUrls: ['./context-panel.component.scss']
})
export class ContextPanelComponent implements OnInit {
  
  /* date picker model */
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  }
  
  public dateStartModel: any = { date: { year: 2018, month: 10, day: 9 } };
  public dateEndModel: any = { date: { year: 2018, month: 10, day: 9 } };

  /* bubble(cluster) data */
  clusterData = [
    {name: 'I\'d', radius: 50, label: '100'},
    {name: 'like', radius: 10, label: '27'},
    {name: 'to', radius: 5, label: '5'},
    {name: 'work', radius: 30, label: '30'},
    {name: 'with', radius: 17, label: '17'},
    {name: 'YOU', radius: 50, label: '100'},
    {name: 'Javascript', radius: 80, label: '80'},
    {name: 'Vue', radius: 90, label: '100'},
    {name: 'Angular', radius: 100, label: '100'},
    {name: 'React', radius: 80, label: '80'},
    {name: 'Ruby', radius: 70, label: '70'},
    {name: 'Python', radius: 40, label: '60'},
    {name: 'd3', radius: 60, label: '100'},
  ];

  /* pie data */
  pieData = [
    { 
      type: 'My chart',
      unit: '$',
      data: [
        {cat:'Straits Times', val: 10},
        {cat:'The Smart Local', val: 50},
        {cat:'Channel New Asia', val: 40},
        {cat:'Yahoo Simgapore', val: 40},
        {cat:'Mothersip', val: 40},
        {cat:'Today Online', val: 40},
      ],
      total: 100
    }

  ]

  constructor() { }

  ngOnInit() {
    console.log('sldfjksdflj')
  }

}
