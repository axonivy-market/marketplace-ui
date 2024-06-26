import { Component, ElementRef, HostListener, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductFeedbacksPanelComponent } from './product-feedbacks-panel/product-feedbacks-panel.component';
import { ShowFeedbacksDialogComponent } from './product-feedbacks-panel/show-feedbacks-dialog/show-feedbacks-dialog.component';
import { StarRatingCountingComponent } from './star-rating-counting/star-rating-counting.component';
import { ProductDetailService } from './product-detail.service';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    providers: [ProductDetailService],
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
  allFeedbacksLoaded = false; // Flag to track if all feedbacks are loaded
  inMobileMode!: boolean;
  maxFeedbacksToShow = 6;


  constructor() {
    const productId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    
    if (productId) {
      this.productDetailService.getProductDetailById(productId).subscribe(product => {
        this.product = product;
      });
    }
    this.route.queryParams.subscribe(params => {
      this.showPopup = params['showPopup'];
    });
  }

  ngAfterViewInit(): void {
    if (this.showPopup) {
      const ratingLinkElement = this.starRatingCountingComponent.ratingLink.nativeElement;
      ratingLinkElement.click();
    }
    this.feedbackPanelComponent.showFeedbacksLoadedBtn.subscribe(() => {
      this.allFeedbacksLoaded = true;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMediaSize();
  }

  private checkMediaSize() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.inMobileMode = true;
      
    } else {
      this.inMobileMode = false;
    }
  }

  // Get detail of product by id (include name) then pass product into child component
  // Move button Show into product-feedback-panel
}

