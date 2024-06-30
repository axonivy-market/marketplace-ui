import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductFeedbacksPanelComponent } from './product-feedbacks-panel/product-feedbacks-panel.component';
import { ProductDetailService } from './product-detail.service';
import { AuthService } from '../../../auth/auth.service';
import { ShowFeedbacksDialogComponent } from './show-feedbacks-dialog/show-feedbacks-dialog.component';
import { Feedback } from '../../../shared/models/feedback.model';
import { AddFeedbackDialogComponent } from './product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component';
import { StarRatingCountingComponent } from "./star-rating-counting/star-rating-counting.component";
import { AppModalService } from '../../../shared/services/app-modal.service';
import { ProductFeedbackService } from './product-feedbacks-panel/product-feedback.service';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    providers: [ProductDetailService, AuthService, AppModalService, ProductFeedbackService],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss',
    imports: [ShowFeedbacksDialogComponent, ProductFeedbacksPanelComponent, StarRatingCountingComponent]
})
export class ProductDetailComponent {

  @ViewChild(ProductFeedbacksPanelComponent) feedbackPanelComponent!: ProductFeedbacksPanelComponent;

  private productDetailService = inject(ProductDetailService);
  private route = inject(ActivatedRoute);
  private appModalService = inject(AppModalService);
  private productFeedbackService = inject(ProductFeedbackService);

  product!: Product;
  showPopup!: boolean;
  allFeedbacksLoaded = signal<boolean>(false);
  isMobileMode = signal<boolean>(false);
  maxFeedbacksToShow = 6;
  userFeedback!: Feedback;

  constructor() {
    const productId = this.route.snapshot.params['id'];
    this.productDetailService.getProductDetailById(productId).subscribe(product => {
      this.product = product;
    });
    this.productFeedbackService.findProductFeedbackOfUser(productId).subscribe(userFeedback => {
      this.userFeedback = userFeedback;
    });
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      this.showPopup = params['showPopup'];
      
      if (this.showPopup) {
        this.appModalService.openAddFeedbackDialog(this.userFeedback, this.product.id, this.product.name)
        .then(() => {
          // this.updateFeedback.emit();
        });
      }
    });
    
    if (this.feedbackPanelComponent) {
      this.feedbackPanelComponent.showFeedbacksLoadedBtn.subscribe(() => {
        this.allFeedbacksLoaded.set(true);
      });
    }
    this.checkMediaSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMediaSize();
  }

  private checkMediaSize() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.isMobileMode.set(true);
    } else {
      this.isMobileMode.set(false);
    }
  }

  openShowFeedbacksDialog() {
    if (this.isMobileMode()) {
      this.handleSmallScreenFeedback();
    } else {
      this.appModalService.openShowFeedbacksDialog(this.product.id, this.product.name);
    }
  }

  private handleSmallScreenFeedback() {
    if (this.feedbackPanelComponent.currentPage * this.feedbackPanelComponent.pageSize < this.feedbackPanelComponent.totalElements) {
      this.feedbackPanelComponent.loadFeedbacks(this.feedbackPanelComponent.currentPage + 1, this.feedbackPanelComponent.pageSize, this.feedbackPanelComponent.currentSort);
    }
  }

  updateFeedbackFromAddFeedbackDialog() {
    this.feedbackPanelComponent.refreshFeedbackWithKeepState();
  }
}

