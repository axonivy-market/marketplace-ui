import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  WritableSignal,
  inject,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { ThemeService } from '../../core/services/theme/theme.service';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { SortType } from '../../shared/enums/sort-type.enum';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductService } from './product.service';

const SEARCH_DEBOUNCE_TIME = 500;

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
export class ProductComponent implements AfterViewInit, OnDestroy {
  products: WritableSignal<Product[]> = signal([]);
  subscriptions: Subscription[] = [];
  searchTextChanged = new Subject<string>();
  criteria: Criteria = {
    search: '',
    type: FilterType.All_TYPES,
    sort: SortType.POPULARITY
  };
  links: any;
  page: any;

  productService = inject(ProductService);
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  router = inject(Router);
  @ViewChild('observer', { static: true }) observerElement!: ElementRef;

  constructor() {
    this.loadProductItems();
    this.subscriptions.push(
      this.searchTextChanged
        .pipe(debounceTime(SEARCH_DEBOUNCE_TIME))
        .subscribe(value => {
          this.criteria = {
            ...this.criteria,
            search: value
          };
          this.loadProductItems(true);
        })
    );
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  viewProductDetail(productId: string) {
    this.router.navigate(['', productId]);
  }

  onFilterChange(filterType: FilterType) {
    this.criteria = {
      ...this.criteria,
      url: '',
      type: filterType
    };
    this.loadProductItems(true);
  }

  onSortChange(sortType: SortType) {
    this.criteria = {
      ...this.criteria,
      url: '',
      sort: sortType
    };
    this.loadProductItems(true);
  }

  onSearchChanged(searchString: string) {
    this.searchTextChanged.next(searchString);
  }

  loadProductItems(shouldCleanData?: boolean) {
    this.subscriptions.push(
      this.productService.findProductsByCriteria(this.criteria).subscribe((response: any) => {
        let newProducts = response.products as Product[];
        if (shouldCleanData) {
          this.products.set(newProducts);
        } else {
          this.products.update(existingProducts => existingProducts.concat(newProducts));
        }
        this.links = response.links;
        this.page = response.page;
      })
    );
  }

  setupIntersectionObserver() {
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.hasMore()) {
          this.criteria.url = this.links.next.href;
          this.loadProductItems();
        }
      });
    }, options);

    observer.observe(this.observerElement.nativeElement);
  }

  hasMore() {
    if (!this.page || !this.links) {
      return false;
    }
    return this.page.number < this.page.totalPages
      && this.links?.next != undefined;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
