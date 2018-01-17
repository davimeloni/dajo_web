import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!args) {
      return value;
    }

    return value.filter(item => {
      for (const key in item) {
        if ((typeof item[key] === 'string' || item[key] instanceof String) &&
          (item[key].indexOf(args) !== -1)) {
          return true;
        }
      }
    });

  }

}
