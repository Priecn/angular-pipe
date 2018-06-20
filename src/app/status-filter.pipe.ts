import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter',
  pure: false
})
export class StatusFilterPipe implements PipeTransform {

  transform(value: any, status: string, propName: string): any {
    if(value.length === 0 || status === '' || status === undefined){
      return value;
    }
    const resultArr = [];
    for(const item of value){
      if(item[propName] === status)
        resultArr.push(item);
    }
    return resultArr;
  }

}
