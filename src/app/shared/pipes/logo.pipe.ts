import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  standalone: true,
  name: 'logo'
})
export class ProductLogoPipe implements PipeTransform {
  transform(product: Product, _args?: []): string {
    return `/assets/_market/${product.id}/logo.png`;
  }
}
