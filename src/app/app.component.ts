import { Component } from '@angular/core';

type ProjectionData = {
  age: string;
  startBalance: string;
  withdrawalAge: string;
  salary: string;
  contributionRate: string;
  inflationRate: string;
  earnings: string;
  fees: string;
  tax: string;
  withdrawalRate: string;
};
export type TableData = {
  year: Array<any>;
  age: Array<any>;
  startBalance: Array<number>;
  contributions: Array<number>;
  earnings: Array<number>;
  fees: Array<number>;
  tax: Array<number>;
  withdrawals: Array<number>;
  endBalance: Array<number>;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projectionData: ProjectionData = {
    age: '',
    startBalance: '0',
    withdrawalAge: '',
    salary: '0',
    contributionRate: '9.5',
    inflationRate: '3',
    earnings: '7.5',
    fees: '1.5',
    tax: '15',
    withdrawalRate: '5',
  };
  tableData: TableData = {
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

  constructor() {
    this.calc();
  }

  calc() {
    this.tableData = {
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
    const date = new Date();

    const age = parseFloat(this.projectionData.age);

    for (let currentAge = age; currentAge < 100; currentAge++) {
      //currentAge is the age at for the column being calculated
      const i = currentAge - age;
      this.tableData.year.push(date.getFullYear() + currentAge - age);
      this.tableData.age.push(currentAge);

      /*calculate contributions or withdrawals 
      (contributions and startBalance are calculated differently for the first year )*/
      if (currentAge === age) {
        this.tableData.startBalance.push(
          parseFloat(this.projectionData.startBalance)
        );

        this.tableData.contributions.push(
          parseFloat(this.projectionData.salary) *
            (parseFloat(this.projectionData.contributionRate) / 100)
        );

        this.tableData.withdrawals.push(0);
      } else {
        this.tableData.startBalance.push(this.tableData.endBalance[i - 1]);

        //check if the withdrawal age has been reached
        if (currentAge < parseFloat(this.projectionData.withdrawalAge)) {
          this.tableData.contributions.push(
            this.tableData.contributions[i - 1] *
              (1 + parseFloat(this.projectionData.inflationRate) / 100)
          );

          this.tableData.withdrawals.push(0);
        } else {
          this.tableData.contributions.push(0);

          this.tableData.withdrawals.push(
            this.tableData.startBalance[i] *
              (parseFloat(this.projectionData.withdrawalRate) / 100)
          );
        }
      }

      //calculate other table data
      this.tableData.earnings.push(
        (this.tableData.startBalance[i] + this.tableData.contributions[i]) *
          (parseFloat(this.projectionData.earnings) / 100)
      );

      this.tableData.fees.push(
        (this.tableData.startBalance[i] +
          this.tableData.contributions[i] +
          this.tableData.earnings[i]) *
          (parseFloat(this.projectionData.fees) / 100)
      );

      this.tableData.tax.push(
        (this.tableData.contributions[i] + this.tableData.earnings[i]) *
          (parseFloat(this.projectionData.tax) / 100)
      );

      this.tableData.endBalance.push(
        this.tableData.startBalance[i] +
          this.tableData.contributions[i] +
          this.tableData.earnings[i] -
          this.tableData.fees[i] -
          this.tableData.tax[i] -
          this.tableData.withdrawals[i]
      );
    }
  }
}
