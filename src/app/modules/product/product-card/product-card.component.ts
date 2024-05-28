import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { Product } from '../../../shared/models/product.model';
import { ProductLogoPipe } from '../../../shared/pipes/logo.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductLogoPipe, TranslateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  themeSerivce = inject(ThemeService);

  @Input() product!: Product;
}
