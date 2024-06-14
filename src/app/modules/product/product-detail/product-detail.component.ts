import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ProductLogoPipe } from '../../../shared/pipes/logo.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { TranslateModule } from '@ngx-translate/core';
import { FilterType } from '../../../shared/enums/filter-type.enum';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { ProductDetail } from '../../../shared/models/product-detail.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    ProductLogoPipe,
    StarRatingComponent,
    TranslateModule,
    MarkdownModule
  ],
  providers: [ProductService, MarkdownService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productDetail: WritableSignal<ProductDetail> = signal({} as ProductDetail);

  route = inject(ActivatedRoute);
  productService = inject(ProductService);

  constructor() {
    const productKey = this.route.snapshot.params['id'];
    const productType = this.route.snapshot.queryParams['type'];
    if (productKey) {
      this.productService
        .getProductDetails(productKey, productType)
        .subscribe(productDetail => {
          this.productDetail.update(value => productDetail);
        });
    }
  }

  getTypeIcon() {
    switch (this.productDetail().type) {
      case FilterType.CONNECTORS:
        return 'fa-solid fa-plug';
      case FilterType.SOLUTION:
        return 'fa fa-flask';
      case FilterType.UTILITIES:
        return 'bi bi-airplane-fill';
      default:
        return 'bi bi-info-circle';
    }
  }
}
