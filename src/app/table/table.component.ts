import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableData } from '../app.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input('data') data: TableData;

  constructor() {
    this.data = {
      year: [0],
      age: [0],
      startBalance: [0],
      contributions: [0],
      earnings: [0],
      fees: [0],
      tax: [0],
      withdrawals: [0],
      endBalance: [0],
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['data']) {
      if (changes['data'].currentValue.year.length === 0) {
        this.data = {
          year: [''],
          age: [''],
          startBalance: [0],
          contributions: [0],
          earnings: [0],
          fees: [0],
          tax: [0],
          withdrawals: [0],
          endBalance: [0],
        };
      }
    }
  }
}
