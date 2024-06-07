import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { StarRatingCountingComponent } from '../star-rating-counting/star-rating-counting.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [StarRatingCountingComponent],
  providers: [ProductService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product!: Product;

  route = inject(ActivatedRoute);
  productService = inject(ProductService);

  constructor() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
