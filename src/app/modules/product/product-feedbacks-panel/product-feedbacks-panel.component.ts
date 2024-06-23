import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { ProductFeedbackComponent } from './product-feedback/product-feedback.component';
import { ProductFeedbackService } from './product-feedback.service';
import { Feedback } from '../../../shared/models/feedback.model';
import { Subscription } from 'rxjs';
import { FeedbackFilterComponent } from './feedback-filter/feedback-filter.component';
import { ShowFeedbacksDialogComponent } from './show-feedbacks-dialog/show-feedbacks-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackApiResponse } from '../../../shared/models/apis/feedback-response.model';

@Component({
  selector: 'app-product-feedbacks-panel',
  standalone: true,
  imports: [ProductFeedbackComponent, FeedbackFilterComponent],
  providers: [ProductFeedbackService],
  templateUrl: './product-feedbacks-panel.component.html',
  styleUrl: './product-feedbacks-panel.component.scss'
})
export class ProductFeedbacksPanelComponent {
  @Input() isBtnShowMoreVisible = true;
  @Input() isScrollable = false;

  productFeedbacks: Feedback[] = [];
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 6;
  subscriptions: Subscription[] = [];
  themeService = inject(ThemeService);
  productFeedbackService = inject(ProductFeedbackService);
  currentSort: string = 'updatedAt,desc'; // Default sort

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(page: number = 0, size: number = 6, sort: string = this.currentSort): void {
    this.productFeedbackService.findProductFeedbacksByCriteria('6674a23283c3194d33fb8da2', page, size, sort)
      .subscribe((response: FeedbackApiResponse) => {
        this.productFeedbacks = response._embedded.feedbacks; // Assuming `content` holds the list of feedbacks
        console.log(response._embedded.feedbacks);
        
        this.totalElements = response.page.totalElements; // Assuming `totalElements` holds the total count
        this.currentPage = response.page.number; // Assuming `number` holds the current page number
      });
  }

  onSortChange(sort: string): void {
    this.currentSort = sort;
    this.loadFeedbacks(0, this.pageSize, sort); // Reload feedbacks with new sort order, reset to first page
  }

  onPageChange(event: any): void {
    this.loadFeedbacks(event.page, event.size, this.currentSort);
  }
}
