import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dollar' })
export class DollarPipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    if (value) {
      let dollars = Math.round(value);
      return '$' + dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else return '';
  }
}
