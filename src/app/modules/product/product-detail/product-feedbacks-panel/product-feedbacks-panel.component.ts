import { ChangeDetectorRef, Component, HostListener, Input, inject } from '@angular/core';
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
  @Input() isRenderInModalDialog = false;
  isScrollable = false;

  productFeedbacks: Feedback[] = [];
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 6;
  subscriptions: Subscription[] = [];
  themeService = inject(ThemeService);
  productFeedbackService = inject(ProductFeedbackService);
  currentSort: string = 'updatedAt,desc'; // Default sort
  atBottom = false;

  ngOnInit(): void {
    this.loadFeedbacks();
    this.checkMediaSize();
  }

  ngOnDestroy(): void {
    // Clean up and remove scroll listener when component is destroyed
    this.removeScrollListener();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMediaSize();
    
  }

  // Function to check media size and add/remove scroll listener accordingly
  private checkMediaSize() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.addScrollListener();
      console.log('add');
      
    } else {
      this.removeScrollListener();
      console.log('remove');
    }
  }

  // Function to add scroll listener to root element
  private addScrollListener() {
    document.documentElement.addEventListener('scroll', this.onScrollCheckBottom);
    document.body.addEventListener('scroll', this.onScrollCheckBottom);
  }

  // Function to remove scroll listener from root element
  private removeScrollListener() {
    document.documentElement.removeEventListener('scroll', this.onScrollCheckBottom);
    document.body.removeEventListener('scroll', this.onScrollCheckBottom);
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
      });
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
