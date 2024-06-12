import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { StarRatingCountingComponent } from '../star-rating-counting/star-rating-counting.component';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel/product-feedbacks-panel.component';
import { ShowFeedbacksDialogComponent } from '../product-feedbacks-panel/show-feedbacks-dialog/show-feedbacks-dialog.component';
import { AddFeedbackDialogComponent } from '../product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingCountingComponent,
    ProductFeedbacksPanelComponent,
    ShowFeedbacksDialogComponent,
    AddFeedbackDialogComponent
  ],
  providers: [ProductService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!: Product;

  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  themeService = inject(ThemeService);

  constructor() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    }
  }
}
