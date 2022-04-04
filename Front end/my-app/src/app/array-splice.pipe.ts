import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice',
})
export class ArraySplicePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    console.log(value);
    args = args.toLowerCase();

    return value.filter(function (data: any) {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }
}
