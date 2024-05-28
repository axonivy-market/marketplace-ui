import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, Subject, Subscription, debounceTime } from 'rxjs';
import { ThemeService } from '../../core/services/theme/theme.service';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { SortType } from '../../shared/enums/sort-type.enum';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductService } from './product.service';

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
  criteria: Criteria = {
    search: '',
    type: FilterType.All_TYPES,
    sort: SortType.POPULARITY
  };

  productService = inject(ProductService);
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  router = inject(Router);

  constructor() {
    this.products = this.productService.getProductsByCriteria(this.criteria);
    this.subscriptions.push(
      this.searchTextChanged
        .pipe(debounceTime(SEARCH_DEBOUNCE_TIME))
        .subscribe((value) => {
          this.criteria = {
            ...this.criteria,
            search: value
          };
          this.products = this.productService.getProductsByCriteria(
            this.criteria
          );
        })
    );
  }

  ngOnInit(): void {}

  viewProductDetail(productId: string) {
    this.router.navigate(['', productId]);
  }

  onFilterChange(type: FilterType) {
    this.criteria = {
      ...this.criteria,
      type: type
    };
    this.products = this.productService.getProductsByCriteria(this.criteria);
  }

  onSortChange(type: SortType) {
    this.criteria = {
      ...this.criteria,
      sort: type
    };
    this.products = this.productService.getProductsByCriteria(this.criteria);
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
