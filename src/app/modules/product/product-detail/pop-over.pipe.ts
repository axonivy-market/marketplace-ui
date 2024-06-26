import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../../../shared/models/product-detail.model';

@Pipe({
  standalone: true,
  name: 'popover'
})
export class PopOverPipe implements PipeTransform {
  transform(product: any, _args?: []): string {
    const infoTab = document.querySelector('.info-tab');
    return infoTab ? infoTab.innerHTML : '';
  }
}
