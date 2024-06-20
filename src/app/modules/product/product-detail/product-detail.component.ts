import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ProductVersionActionComponent } from './product-version-action/product-version-action.component';
import { ProductLogoPipe } from '../../../shared/pipes/logo.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { TranslateModule } from '@ngx-translate/core';
import { FilterType } from '../../../shared/enums/filter-type.enum';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { MarkdownComponent } from '../markdown/markdown.component';
import {
  ProductInstallationCountActionComponent
} from "./product-installation-count-action/product-installation-count-action.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    ProductLogoPipe,
    StarRatingComponent,
    TranslateModule,
    MarkdownModule,
    MarkdownComponent,
    ProductVersionActionComponent,
    ProductInstallationCountActionComponent,
  ],
  providers: [ProductService, MarkdownService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!: Product;
  installationCount!: number;
  route = inject(ActivatedRoute);
  productService = inject(ProductService);

  constructor() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
        this.installationCount = product.installationCount;
      });
    }
  }

  receiveInstallationCountData(data: number) {
    this.installationCount = data;
  }

  getTypeIcon() {
    switch (this.product.type) {
      case FilterType.CONNECTORS:
        return 'bi bi-puzzle';
      case FilterType.SOLUTION:
        return 'bi bi-star';
      case FilterType.UTILITIES:
        return 'bi bi-airplane-fill';
      default:
        return 'bi bi-info-circle';
    }
  }
}
