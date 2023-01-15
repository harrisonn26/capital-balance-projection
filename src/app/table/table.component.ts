import { Component, Input } from '@angular/core';
import { TableData } from '../app.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('data') data: TableData;

  constructor() {
    this.data = {
      year: [],
      age: [],
      startBalance: [],
      contributions: [],
      earnings: [],
      fees: [],
      tax: [],
      withdrawals: [],
      endBalance: [],
    };
  }
}
