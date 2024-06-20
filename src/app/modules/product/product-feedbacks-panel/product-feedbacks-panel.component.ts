import { Component, Input, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { ProductFeedbackComponent } from './product-feedback/product-feedback.component';
import { ProductFeedbackService } from './product-feedback.service';
import { Feedback } from '../../../shared/models/feedback.model';
import { Subscription } from 'rxjs';
import { FeedbackFilterComponent } from './feedback-filter/feedback-filter.component';

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
  subscriptions: Subscription[] = [];
  themeService = inject(ThemeService);
  productFeedbackService = inject(ProductFeedbackService);

  constructor() {
    this.loadAllProductFeedback('667109f11666e1352a072f8a');
  }

  loadAllProductFeedback(productId: string): void {
    this.subscriptions.push(
      this.productFeedbackService
        .getAllProductFeedbacks(productId)
        .subscribe(productFeedbacks => {
          console.log("results:");
          console.log(productFeedbacks);
          
          
          this.productFeedbacks = productFeedbacks;
        })
    );
  }
}
