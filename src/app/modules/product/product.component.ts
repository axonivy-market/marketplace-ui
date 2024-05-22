import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { ProductCardComponent } from './product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  productService = inject(ProductService);
  router = inject(Router);
  subscription: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {
    const sub = this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
    this.subscription.push(sub);
  }

  viewProductDetail(productId: string) {
    this.router.navigate(['', productId]);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
