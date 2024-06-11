import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product-version-action',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './product-version-action.component.html',
  styleUrl: './product-version-action.component.scss'
})
export class ProductVersionActionComponent {
  @Input()
  productId!: string;
  versions: string[] = ['10', '11'];
  artifacts: String[] = ['portal', 'portal app'];
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  isDevVersionsDisplayed = false;
  designerVersion: string = '';
  selectedArtifact: string = '10';
  selectedVersion: string = 'portal';
  productService = inject(ProductService);

  onShowVersionAndArtifact() {
    this.versions = [];
    this.artifacts = [];
    let a = this.productService.sendRequestToProductDetailVersionAPI(
      this.productId,
      this.isDevVersionsDisplayed,
      this.designerVersion
    );
    console.log(a);
  }

  downloadArifact() {
    console.log(this.selectedArtifact);
    console.log(this.selectedVersion);
  }
}
