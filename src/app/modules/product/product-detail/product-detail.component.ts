import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductFeedbacksPanelComponent } from './product-feedbacks-panel/product-feedbacks-panel.component';
import { StarRatingCountingComponent } from './star-rating-counting/star-rating-counting.component';
import { ProductDetailService } from './product-detail.service';
import { AuthService } from '../../../auth/auth.service';
import { ShowFeedbacksDialogComponent } from './show-feedbacks-dialog/show-feedbacks-dialog.component';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    providers: [ProductDetailService, AuthService],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss',
    imports: [ShowFeedbacksDialogComponent, ProductFeedbacksPanelComponent, StarRatingCountingComponent]
})
export class ProductDetailComponent {

  @ViewChild(StarRatingCountingComponent) starRatingCountingComponent!: StarRatingCountingComponent;
  @ViewChild(ProductFeedbacksPanelComponent) feedbackPanelComponent!: ProductFeedbacksPanelComponent;

  private productDetailService = inject(ProductDetailService);
  private route = inject(ActivatedRoute);
  private themeService = inject(ThemeService);
  private renderer = inject(Renderer2);
  private modalService = inject(NgbModal);

  product!: Product;
  showPopup!: boolean;
  allFeedbacksLoaded = signal<boolean>(false); // Flag to track if all feedbacks are loaded
  inMobileMode = signal<boolean>(false);
  maxFeedbacksToShow = 6;

  constructor() {
    const productId = this.route.snapshot.params['id'];
    
    if (productId) {
      this.productDetailService.getProductDetailById(productId).subscribe(product => {
        this.product = product;
      });
    }
    this.route.queryParams.subscribe(params => {
      this.showPopup = params['showPopup'];
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMediaSize();
  }

  private checkMediaSize() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.inMobileMode.set(true);
    } else {
      this.inMobileMode.set(false);
    }
  }

  ngAfterViewInit(): void {
    if (this.showPopup) {
      const ratingLinkElement = this.starRatingCountingComponent.ratingLink.nativeElement;
      ratingLinkElement.click();
    }
    this.feedbackPanelComponent.showFeedbacksLoadedBtn.subscribe(() => {
      this.allFeedbacksLoaded.set(true);
    });
    this.checkMediaSize();
  }

  openShowFeedbacksDialog() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      // If the width is smaller than 700px, perform a different action
      this.handleSmallScreenFeedback();
    } else {
      // Otherwise, open the dialog as usual
      const showFeedbackDialog = this.modalService.open(ShowFeedbacksDialogComponent, { centered: true, modalDialogClass: 'show-feedbacks-modal-dialog' });
      showFeedbackDialog.componentInstance.productName = this.product.name;
    }
  }

  private handleSmallScreenFeedback() {
    if (this.feedbackPanelComponent.currentPage * this.feedbackPanelComponent.pageSize < this.feedbackPanelComponent.totalElements) {
      this.feedbackPanelComponent.loadFeedbacks(this.feedbackPanelComponent.currentPage + 1, this.feedbackPanelComponent.pageSize, this.feedbackPanelComponent.currentSort);
    }
  }


}

