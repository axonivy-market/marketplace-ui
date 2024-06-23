import { Component, ElementRef, Renderer2, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel/product-feedbacks-panel.component';
import { ShowFeedbacksDialogComponent } from '../product-feedbacks-panel/show-feedbacks-dialog/show-feedbacks-dialog.component';
import { StarRatingCountingComponent } from '../star-rating-counting/star-rating-counting.component';
import { AddFeedbackDialogComponent } from "../product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    providers: [ProductService],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss',
    imports: [ShowFeedbacksDialogComponent, AddFeedbackDialogComponent, ProductFeedbacksPanelComponent, StarRatingCountingComponent]
})
export class ProductDetailComponent {
  product!: Product;

  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  themeService = inject(ThemeService);
  renderer = inject(Renderer2);
  showPopup!: boolean;
  private modalService = inject(NgbModal);

  @ViewChild(StarRatingCountingComponent) starRatingCountingComponent!: StarRatingCountingComponent;

  constructor() {
    const productId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    
    if (productId) {
      this.productService.getProductById(productId).subscribe(product => {
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
  }

  openShowFeedbacksDialog() {
    this.modalService.open(ShowFeedbacksDialogComponent, { centered: true, modalDialogClass: 'show-feedbacks-modal-dialog' });
  }
}
