import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ProductCommentComponent } from '../product-comment/product-comment.component';
import { COMMENTS } from '../../../shared/constants/common.constant';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { StarRatingCountingComponent } from '../star-rating-counting/star-rating-counting.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductCommentComponent, StarRatingCountingComponent],
  providers: [ProductService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product!: Product;
  comments: Object[] = COMMENTS;

  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  themeService = inject(ThemeService);

  constructor() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
