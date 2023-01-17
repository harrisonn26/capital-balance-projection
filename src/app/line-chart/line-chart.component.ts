import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TableData } from '../app.component';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  chart: any;
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
  //initializes the chart
  ngOnInit() {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.data.year,
        datasets: [
          {
            label: 'Start Balance',
            data: this.data.startBalance,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }
  //updates the chart when data changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes && !changes['data'].firstChange) {
      this.chart.data.labels = changes['data'].currentValue.year;
      this.chart.data.datasets[0].data =
        changes['data'].currentValue.startBalance;
      this.chart.update();
    }
  }
}
