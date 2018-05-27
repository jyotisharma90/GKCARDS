import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 public searchText: string;
  transform(items: any[], searchText): any[] {
    console.log(items);
    
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        console.log(it.title.label);
        let itemsLabelText = it.title.label;
        return itemsLabelText.toLowerCase().includes(searchText);
    });
   }
}