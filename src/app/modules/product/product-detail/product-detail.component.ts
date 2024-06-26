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
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { ProductDetail } from '../../../shared/models/product-detail.model';
import { Readme } from '../../../shared/models/readme.model';
import { ProductVersionActionComponent } from './product-version-action/product-version-action.component';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { PopOverPipe } from './pop-over.pipe';

declare var bootstrap: any;

const NON_NUMERIC_CHAR = '[^0-9.]';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingComponent,
    TranslateModule,
    MarkdownModule,
    ProductVersionActionComponent,
    PopOverPipe
  ],
  providers: [ProductService, MarkdownService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productDetail: WritableSignal<ProductDetail> = signal({} as ProductDetail);
  readme: WritableSignal<Readme> = signal({} as Readme);
  themeService = inject(ThemeService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  productService = inject(ProductService);
  activeTab: string = 'description';
  resizeObserver: ResizeObserver;

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
    this.resizeObserver = new ResizeObserver(() => {
      this.updateDropdownSelection();
    });
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

  onTabChange(event: Event) {
    const selectedTab = (event.target as HTMLSelectElement).value;
    this.setActiveTab(selectedTab);
  }

  updateDropdownSelection() {
    const dropdown = document.getElementById('nav_item') as HTMLSelectElement;
    if (dropdown) {
      dropdown.value = this.activeTab;
    }
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeTab = fragment.replace('tab-', '');
      } else {
        this.setActiveTab('description');
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      fragment: 'tab-' + tab
    });
    this.updateDropdownSelection();
  }

  initializePopover() {
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map((popoverTriggerEl: Element) => {
      return new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        content: this.popoverContent(),
        sanitize: false,
        placement: 'bottom',
        container: document.querySelector('.tab-pane'),
        trigger: 'focus'
      });
    });
  }

  popoverContent(): string {
    const infoTab = document.querySelector('.info-tab');
    return infoTab ? infoTab.innerHTML : '';
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(document.body);
    this.initializePopover();
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect();
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
