import { AfterViewInit, Component, EventEmitter, HostListener, Input, Output, SimpleChanges, computed, effect, inject, input, signal } from '@angular/core';
import { ProductFeedbackComponent } from './product-feedback/product-feedback.component';
import { ProductFeedbackService } from './product-feedback.service';
import { Subscription } from 'rxjs';
import { FeedbackFilterComponent } from './feedback-filter/feedback-filter.component';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { FeedbackApiResponse } from '../../../../shared/models/apis/feedback-response.model';
import { Feedback } from '../../../../shared/models/feedback.model';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-feedbacks-panel',
  standalone: true,
  imports: [ProductFeedbackComponent, FeedbackFilterComponent],
  providers: [ProductFeedbackService],
  templateUrl: './product-feedbacks-panel.component.html',
  styleUrl: './product-feedbacks-panel.component.scss'
})
export class ProductFeedbacksPanelComponent {
  isRenderInModalDialog = input();
  isMobileMode = input<boolean>();
  @Input() productId!: string;
  @Output() showFeedbacksLoadedBtn = new EventEmitter<void>();
  
  productFeedbacks = signal<Feedback[]>([]);
  // displayedFeedbacks: Feedback[] = [];
  displayedFeedbacks = computed(() => 
    this.isMobileMode() ? this.productFeedbacks() : this.productFeedbacks().slice(0, 6)
  );
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 6;
  subscriptions: Subscription[] = [];
  themeService = inject(ThemeService);
  productFeedbackService = inject(ProductFeedbackService);
  currentSort: string = 'updatedAt,desc'; // Default sort
  atBottom = false;
  atBottomWindow = false;

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(page: number = 0, size: number = this.pageSize, sort: string = this.currentSort): void {
    this.productFeedbackService.findProductFeedbacksByCriteria(this.productId, page, size, sort)
      .subscribe((response: FeedbackApiResponse) => {
        if (page === 0) {
          this.productFeedbacks.set(response._embedded.feedbacks);
        } else {
          this.productFeedbacks.update(values => [...values, ...response._embedded.feedbacks]);
        }
        this.totalElements = response.page.totalElements;
        this.currentPage = response.page.number;
        this.checkIfAllFeedbacksLoaded();
      });
  }

  refreshFeedbackWithKeepState(): void {
      // Clear existing feedbacks to reset
      this.productFeedbackService.findProductFeedbacksByCriteria(this.productId, 0, this.productFeedbacks.length, this.currentSort)
      .subscribe((response: FeedbackApiResponse) => {
        this.productFeedbacks.set(response._embedded.feedbacks);
        this.totalElements = response.page.totalElements;
        this.checkIfAllFeedbacksLoaded();
      });
  }

  checkIfAllFeedbacksLoaded(): void {
    if (this.productFeedbacks().length >= this.totalElements) {
      this.showFeedbacksLoadedBtn.emit();
    }
  }

  onSortChange(sort: string): void {
    this.currentSort = sort;
    this.loadFeedbacks(0, this.pageSize, sort); // Reload feedbacks with new sort order, reset to first page
  }

  onPageChange(event: any): void {
    this.loadFeedbacks(event.page, event.size, this.currentSort);
  }

  onScrollCheckBottom(e: any): void {
    const threshold = 150; // Add a small threshold for triggering the load
    const position = e.target.scrollTop + e.target.offsetHeight;
    const height = e.target.scrollHeight;
    if (position >= height - threshold) {
      if (!this.atBottom && this.currentPage * this.pageSize < this.totalElements) {
        this.atBottom = true;
        this.loadFeedbacks(this.currentPage + 1, this.pageSize, this.currentSort);
      }
    } else {
      this.atBottom = false;
    }
  }
}
