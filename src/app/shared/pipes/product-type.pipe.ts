import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
  standalone: true,
  name: 'productType'
})
export class ProductTypePipe implements PipeTransform {
  transform(type: string, args?: any): any {
    return `common.filter.${type}`;
  }
}
