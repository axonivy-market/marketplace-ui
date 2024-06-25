import {
  Component,
  EventEmitter,
  Output,
  WritableSignal,
  inject,
  signal
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { TranslateModule } from '@ngx-translate/core';
import { FilterType } from '../../../shared/enums/filter-type.enum';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { ProductDetail } from '../../../shared/models/product-detail.model';
import { Readme } from '../../../shared/models/readme.model';
import { ProductVersionActionComponent } from './product-version-action/product-version-action.component';
declare var bootstrap: any;

const NON_NUMERIC_CHAR = '[^0-9.]';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    StarRatingComponent,
    TranslateModule,
    MarkdownModule,
    ProductVersionActionComponent
  ],
  providers: [ProductService, MarkdownService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productDetail: WritableSignal<ProductDetail> = signal({} as ProductDetail);
  readme: WritableSignal<Readme> = signal({} as Readme);
  route = inject(ActivatedRoute);
  router = inject(Router);
  productService = inject(ProductService);
  activeTab: string = 'description';

  @Output() versionChanged = new EventEmitter<string>();

  constructor() {
    const productId = this.route.snapshot.params['id'];
    const productType = this.route.snapshot.queryParams['type'];
    if (productId) {
      this.productService
        .getProductDetails(productId, productType)
        .subscribe(productDetail => {
          this.productDetail.update(value => productDetail);
          if (this.productDetail().newestReleaseVersion!) {
            this.getReadmeAndProductValues(
              productId,
              this.productDetail().newestReleaseVersion!
            );
          }
        });
    }
  }

  loadDetailTabs(versionChanged: string) {
    if (
      versionChanged === undefined ||
      versionChanged !== this.readme().tag!.replaceAll(NON_NUMERIC_CHAR, '')
    ) {
      versionChanged = this.productDetail().newestReleaseVersion!;
    }
    this.getReadmeAndProductValues(this.productDetail().id, versionChanged);
  }

  getReadmeAndProductValues(productId: string, versionChanged: string) {
    this.productService
      .getReadmeAndProductContentsFromTag(productId, versionChanged)
      .subscribe(readme => {
        this.readme.update(value => readme);
      });
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeTab = fragment.replace('tab-', '');
      } else {
        this.setActiveTab('description');
      }
    });
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }

  popoverContent(): string {
    return document.querySelector('.info-tab')!.innerHTML;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      fragment: 'tab-' + tab
    });
  }

  getTypeIcon() {
    switch (this.productDetail().type) {
      case 'connector':
        return 'bi bi-plug';
      case 'solution':
        return 'bi bi-flask';
      case 'util':
        return 'ti ti-pencil-check';
      default:
        return;
    }
  }
}
