import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import {
  VersionData,
  Artifact
} from '../../../../shared/models/vesion-artifact.model';
import { log } from 'console';
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
  artifacts: Artifact[] = [];
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  isDevVersionsDisplayed = false;
  designerVersion: string = '';
  selectedArtifact!: Artifact;
  selectedVersion: string = 'portal';
  productService = inject(ProductService);

  onShowVersionAndArtifact() {
    console.log('asd');
    this.productService
      .sendRequestToProductDetailVersionAPITest(this.productId, false, '')
      .subscribe((data: VersionData) => {
        console.log(data);

        this.versions = Object.keys(data);
        if (this.versions.length > 0) {
          this.selectedVersion = this.versions[0];
          this.artifacts = data[this.selectedVersion];
          this.selectedArtifact = this.artifacts[0];
        }
      });
  }

  downloadArifact() {
    window.open(this.selectedArtifact.downloadUrl, '_blank');
  }
}
