import { Component, ElementRef, Renderer2, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel/product-feedbacks-panel.component';
import { ShowFeedbacksDialogComponent } from '../product-feedbacks-panel/show-feedbacks-dialog/show-feedbacks-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingCountingComponent } from '../star-rating-counting/star-rating-counting.component';
import { AddFeedbackDialogComponent } from "../product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component";

@Component({
    selector: 'app-product-detail',
    standalone: true,
    providers: [ProductService],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss',
    imports: [
        CommonModule,
        StarRatingCountingComponent,
        ProductFeedbacksPanelComponent,
        ShowFeedbacksDialogComponent,
        AddFeedbackDialogComponent
    ]
})
export class ProductDetailComponent {
  product!: Product;

  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  themeService = inject(ThemeService);
  modalService = inject(NgbModal);
  renderer = inject(Renderer2);
  showPopup!: boolean;

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
}
