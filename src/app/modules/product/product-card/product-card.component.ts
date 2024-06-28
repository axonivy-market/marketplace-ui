import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { Product } from '../../../shared/models/product.model';
import { ProductLogoPipe } from '../../../shared/pipes/logo.pipe';
import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductLogoPipe, TranslateModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  @Input() product!: Product;
}
