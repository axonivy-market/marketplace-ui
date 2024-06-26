import { Component, inject, Input, signal } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Artifact } from '../../../../shared/models/vesion-artifact.model';

@Component({
  selector: 'app-product-version-action',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './product-detail-version-action.component.html',
  styleUrl: './product-detail-version-action.component.scss'
})
export class ProductDetailVersionActionComponent {
  @Input()
  productId!: string;
  versions: string[] = [];
  artifacts: Artifact[] = [];
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  isDevVersionsDisplayed = signal(false);
  isDropDownDisplayed = signal(false);
  isDesignerEnvironment = signal(false);
  isInvalidInstallationEnvironment = signal(false);
  designerVersion!: string;
  selectedArtifact!: Artifact;
  selectedVersion!: string;
  productService = inject(ProductService);
  versionMap: Map<string, Artifact[]> = new Map();

  onInstallArtifact() {
    if (!this.isDesignerEnvironment()) {
      const delayTimeBeforeHideMessage = 2000;
      this.isInvalidInstallationEnvironment.set(true);
      setTimeout(
        () => this.isInvalidInstallationEnvironment.set(false),
        delayTimeBeforeHideMessage
      );
    }
  }

  onSelectVersion() {
    this.artifacts = this.versionMap.get(this.selectedVersion) || [];

    if (this.artifacts.length !== 0) {
      this.selectedArtifact = this.artifacts[0];
    }
  }

  onShowDevVersion(event: Event) {
    event.preventDefault();
    this.isDevVersionsDisplayed.set(!this.isDevVersionsDisplayed());
    this.getVersionWithArtifact();
  }

  async onShowVersionAndArtifact() {
    if (!this.isDropDownDisplayed() && this.artifacts.length === 0) {
      await this.getVersionWithArtifact();
    }
    this.isDropDownDisplayed.set(!this.isDropDownDisplayed());
  }

  async getVersionWithArtifact() {
    this.sanitizeDataBeforFetching();
    this.productService
      .sendRequestToProductDetailVersionAPITest(
        this.productId,
        this.isDevVersionsDisplayed(),
        this.designerVersion
      )
      .subscribe(data => {
        data.forEach(item => {
          const version = 'Version '.concat(item.version);
          this.versions.push(version);
          this.versionMap.set(version, item.artifactsByVersion);
        });
        if (this.versions.length !== 0) {
          this.selectedVersion = this.versions[0];
          this.onSelectVersion();
        }
      });
  }

  sanitizeDataBeforFetching() {
    this.versions = [];
    this.artifacts = [];
    this.selectedArtifact = {} as Artifact;
    this.selectedVersion = '';
  }

  downloadArifact() {
    window.open(this.selectedArtifact.downloadUrl, '_blank');
  }
}
