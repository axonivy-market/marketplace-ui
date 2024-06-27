import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges, computed, effect, inject, input, signal } from '@angular/core';
import { ProductFeedbackComponent } from './product-feedback/product-feedback.component';
import { ProductFeedbackService } from './product-feedback.service';
import { Subscription } from 'rxjs';
import { FeedbackFilterComponent } from './feedback-filter/feedback-filter.component';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { FeedbackApiResponse } from '../../../../shared/models/apis/feedback-response.model';
import { Feedback } from '../../../../shared/models/feedback.model';

@Component({
  selector: 'app-product-feedbacks-panel',
  standalone: true,
  imports: [ProductFeedbackComponent, FeedbackFilterComponent],
  providers: [ProductFeedbackService],
  templateUrl: './product-feedbacks-panel.component.html',
  styleUrl: './product-feedbacks-panel.component.scss'
})
export class ProductFeedbacksPanelComponent {
  isRenderInModalDialog = input(false);
  @Input() isMobileMode = false;
  @Output() showFeedbacksLoadedBtn = new EventEmitter<void>();
  
  productFeedbacks: Feedback[] = [];
  displayedFeedbacks: Feedback[] = [];
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

  ngOnChanges(changes: SimpleChanges) {
    this.updateDisplayedFeedbacks(changes.isMobileMode.currentValue);
  }

  loadFeedbacks(page: number = 0, size: number = this.pageSize, sort: string = this.currentSort): void {
    this.productFeedbackService.findProductFeedbacksByCriteria('667109f11666e1352a072f8a', page, size, sort)
      .subscribe((response: FeedbackApiResponse) => {
        if (page === 0) {
          this.productFeedbacks = response._embedded.feedbacks;
        } else {
          this.productFeedbacks = [...this.productFeedbacks, ...response._embedded.feedbacks];
        }
        this.totalElements = response.page.totalElements;
        this.currentPage = response.page.number;
        this.checkIfAllFeedbacksLoaded();
      });
  }

  checkIfAllFeedbacksLoaded(): void {
    if (this.productFeedbacks.length >= this.totalElements) {
      this.showFeedbacksLoadedBtn.emit();
    }
  }

  updateDisplayedFeedbacks(isMobileMode: boolean): void {
    if (isMobileMode) {
      this.displayedFeedbacks = this.productFeedbacks;
    } else {
      this.displayedFeedbacks = this.productFeedbacks.slice(0, 6);
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
    console.log(e);
    console.log(height);
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
