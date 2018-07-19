import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable } from '../../../../../node_modules/angular-6-datatable';

@Component({
  selector: 'app-global-overview',
  templateUrl: './global-overview.component.html',
  styleUrls: ['./global-overview.component.scss']
})
export class GlobalOverviewComponent implements OnInit {

  data: any[];
  currentPage: number;
  totalPages: number;
  totalRows: number;
  rowsOnPage: number;

  @ViewChild('mf') childDataTable:DataTable;

  constructor() { }

  ngOnInit() {
    this.rowsOnPage = 5;

    this.data = [
      {id: 1, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 24, p2: 73, p3: 14 , p4:91, p5: 75, p6: 33, p7: 142, p8: 57, p9: 27 },
      {id: 2, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 21, p2: 23, p3: 43 , p4:21, p5: 25, p6: 63, p7: 143, p8: 65, p9: 62 },
      {id: 3, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 46, p2: 73, p3: 47 , p4:16, p5: 25, p6: 23, p7: 433, p8: 45, p9: 22 },
      {id: 4, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 44, p2: 33, p3: 24 , p4:11, p5: 57, p6: 23, p7: 443, p8: 25, p9: 23 },
      {id: 5, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 42, p2: 32, p3: 47 , p4:10, p5: 53, p6: 63, p7: 423, p8: 54, p9: 12 },
      {id: 6, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 14, p2: 63, p3: 42 , p4:91, p5: 15, p6: 33, p7: 143, p8: 25, p9: 34 },
      {id: 7, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 24, p2: 73, p3: 14 , p4:91, p5: 75, p6: 33, p7: 142, p8: 57, p9: 27 },
      {id: 8, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 21, p2: 23, p3: 43 , p4:21, p5: 25, p6: 63, p7: 143, p8: 65, p9: 62 },
      {id: 9, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 46, p2: 73, p3: 47 , p4:16, p5: 25, p6: 23, p7: 433, p8: 45, p9: 22 },
      {id: 10, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 44, p2: 33, p3: 24 , p4:11, p5: 57, p6: 23, p7: 443, p8: 25, p9: 23 },
      {id: 11, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 42, p2: 32, p3: 47 , p4:10, p5: 53, p6: 63, p7: 423, p8: 54, p9: 12 },
      {id: 12, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 14, p2: 63, p3: 42 , p4:91, p5: 15, p6: 33, p7: 143, p8: 25, p9: 34 },
      {id: 13, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 24, p2: 73, p3: 14 , p4:91, p5: 75, p6: 33, p7: 142, p8: 57, p9: 27 },
      {id: 14, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 21, p2: 23, p3: 43 , p4:21, p5: 25, p6: 63, p7: 143, p8: 65, p9: 62 },
      {id: 15, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 46, p2: 73, p3: 47 , p4:16, p5: 25, p6: 23, p7: 433, p8: 45, p9: 22 },
      {id: 16, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 44, p2: 33, p3: 24 , p4:11, p5: 57, p6: 23, p7: 443, p8: 25, p9: 23 },
      {id: 17, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 42, p2: 32, p3: 47 , p4:10, p5: 53, p6: 63, p7: 423, p8: 54, p9: 12 },
      {id: 18, cluster: 'year-new-old-chinese-singapore-time-last-dog-man-people...boy-inc-home-student', p1: 14, p2: 63, p3: 42 , p4:91, p5: 15, p6: 33, p7: 143, p8: 25, p9: 34 },

    ];

    this.totalRows = this.data.length;
    this.totalPages = Math.ceil(this.totalRows / this.rowsOnPage);
    this.currentPage = 1;
  }

  setPage (pageNumber) {
    this.currentPage = pageNumber
    this.childDataTable.setPage(this.currentPage, this.rowsOnPage)
  }

}
