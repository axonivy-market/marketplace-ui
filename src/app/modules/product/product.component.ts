import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductService } from './product.service';
import {
  Observable,
  Subject,
  Subscription,
  debounceTime,
  fromEvent
} from 'rxjs';
import { ProductCardComponent } from './product-card/product-card.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../core/services/theme/theme.service';
import { SortType } from '../../shared/enums/sort-type.enum';
import {
  FILTER_TYPES,
  SORT_TYPES
} from '../../shared/constants/common.constant';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const SEARCH_DEBOUNCE_TIME = 1000;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ProductCardComponent,
    ProductFilterComponent
  ],
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy {
  products!: Observable<Product[]>;
  subscriptions: Subscription[] = [];
  searchTextChanged = new Subject<string>();

  productService = inject(ProductService);
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  router = inject(Router);

  constructor() {
    this.products = this.productService.getProductsWithSort(
      SortType.POPULARITY
    );
    this.subscriptions.push(
      this.searchTextChanged
        .pipe(debounceTime(SEARCH_DEBOUNCE_TIME))
        .subscribe((value) => {
          this.products = this.productService.getProductByName(value);
        })
    );
  }

  ngOnInit(): void {}

  viewProductDetail(productId: string) {
    this.router.navigate(['', productId]);
  }

  onFilterChange(type: FilterType) {
    this.products = this.productService.getProductByType(type);
  }

  onSortChange(type: SortType) {
    this.products = this.productService.getProductsWithSort(type);
  }

  onSearchChanged(searchString: string) {
    this.searchTextChanged.next(searchString);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
