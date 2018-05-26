import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterUnique',
  pure: false
})
export class FilterUniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // Remove the duplicate elements
  
    let uniqueArray = Array.from(new Set(value));
    
    return uniqueArray;
  }
}