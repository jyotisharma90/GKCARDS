import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
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