import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  standalone: true,
  name: 'logo'
})
export class ProductLogoPipe implements PipeTransform {
  transform(product: Product, _args?: []): string {
    if (product.logoUrl) {
      return product.logoUrl;
    }
    return `/assets/images/misc/axonivy-logo-round.png`;
  }
}
