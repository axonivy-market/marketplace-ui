import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  standalone: true,
  name: 'logo'
})
export class ProductLogoPipe implements PipeTransform {

  transform(product: Product, args?: any): any {
    // Implement your pipe logic here
    return `/assets/_market/${product.id}/logo.png`;
  }

}