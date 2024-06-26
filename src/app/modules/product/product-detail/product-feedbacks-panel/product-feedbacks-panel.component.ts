import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, Output, inject } from '@angular/core';
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
  @Output() showFeedbacksLoadedBtn = new EventEmitter<void>();
  
  isScrollable = false;
  
  productFeedbacks: Feedback[] = [];
  displayedFeedbacks: Feedback[] = []; // Store displayed feedbacks separately
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

  ngOnDestroy(): void {
    // Clean up and remove scroll listener when component is destroyed
    // this.removeScrollListener();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDisplayedFeedbacks();
  }

  // // Function to check media size and add/remove scroll listener accordingly
  // private checkMediaSize() {
  //   const mediaQuery = window.matchMedia('(max-width: 767px)');
  //   if (mediaQuery.matches) {
  //     this.addScrollListener();
      
  //   } else {
  //     this.removeScrollListener();
  //   }
  // }

  // // Function to add scroll listener to root element
  // private addScrollListener() {
  //   if (!this.scrollListenerAdded) {
  //     window.addEventListener('scroll', this.onScrollCheckBottomWindow);
  //     this.scrollListenerAdded = true;
  //     console.log('added');
  //   }
  // }

  // // Function to remove scroll listener from root element
  // private removeScrollListener() {
  //   if (this.scrollListenerAdded) {
  //     window.removeEventListener('scroll', this.onScrollCheckBottomWindow);
  //     this.scrollListenerAdded = false;
  //     console.log('removed');
      
  //   }
  // }

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
        this.updateDisplayedFeedbacks();
        this.checkIfAllFeedbacksLoaded();
      });
  }

  checkIfAllFeedbacksLoaded(): void {
    if (this.productFeedbacks.length >= this.totalElements) {
      this.showFeedbacksLoadedBtn.emit(); // Emit event when all feedbacks are loaded
    }
  }

  updateDisplayedFeedbacks(): void {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
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

  // private onScrollCheckBottomWindow(e: any): void {
  //   const threshold = 150; // Add a small threshold for triggering the load
  //   const position = window.scrollY + window.innerHeight;
  //   const height = document.documentElement.scrollHeight;
  //   console.log('position: ' + position);
  //   console.log('height - threshold: ' + (height - threshold));
  //   if (position >= height - threshold) {
  //     if (!this.atBottomWindow && this.currentPage * this.pageSize < this.totalElements) {
  //       this.atBottomWindow = true;
  //       this.loadFeedbacks(this.currentPage + 1, this.pageSize, this.currentSort);
  //     }
  //   } else {
  //     this.atBottomWindow = false;
  //   }
  // }
}
