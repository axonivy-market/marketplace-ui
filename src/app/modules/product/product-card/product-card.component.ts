import { Component, Input, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { Product } from '../../../shared/models/product.model';
import { ProductLogoPipe } from '../../../shared/pipes/logo.pipe';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductTypePipe } from '../../../shared/pipes/product-type.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductLogoPipe, ProductTypePipe, TranslateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  themeSerivce = inject(ThemeService);

  @Input() product!: Product;
}
