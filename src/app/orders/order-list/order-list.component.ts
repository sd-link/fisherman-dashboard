import { Component, OnInit } from '@angular/core';

import find from 'lodash-es/find';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let a = find([10,20], (obj)=>
    {
      return obj==20;
    })

    console.log(a);

  }

}
