import { Component } from '@angular/core';

type ProjectionData = {
  startBalance: number;
  withdrawalAge: number;
  salary: number;
  contributionRate: number;
  inflationRate: number;
  earnings: number;
  fees: number;
  tax: number;
  withdrawalRate: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projectionData: ProjectionData = {
    startBalance: 0,
    withdrawalAge: 0,
    salary: 0,
    contributionRate: 9.5,
    inflationRate: 3,
    earnings: 75,
    fees: 2,
    tax: 15,
    withdrawalRate: 10,
  };
}
