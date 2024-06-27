import {
  AfterViewInit,
  Component,
  inject,
  Input,
  signal,
  WritableSignal
} from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Artifact } from '../../../../shared/models/vesion-artifact.model';
import { Tooltip } from 'bootstrap';

const delayTimeBeforeHideMessage = 2000;
@Component({
  selector: 'app-product-version-action',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './product-detail-version-action.component.html',
  styleUrl: './product-detail-version-action.component.scss'
})
export class ProductDetailVersionActionComponent implements AfterViewInit {
  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }
  @Input()
  productId!: string;
  versions: WritableSignal<string[]> = signal([]);
  artifacts: WritableSignal<Artifact[]> = signal([]);
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  isDevVersionsDisplayed = signal(false);
  isDropDownDisplayed = signal(false);
  isVersionsDropDownShow = signal(false);
  isDesignerEnvironment = signal(false);
  isInvalidInstallationEnvironment = signal(false);
  designerVersion = '';
  selectedArtifact!: Artifact;
  selectedVersion!: string;
  productService = inject(ProductService);
  versionMap: Map<string, Artifact[]> = new Map();

  getIndicatorClass() {
    if(this.isVersionsDropDownShow()){
      return "indicator-arrow__up";
    }
    return "";
  }

  onShowVersions() {
    this.isVersionsDropDownShow.set(!this.isVersionsDropDownShow());
  }

  onInstallArtifact() {
    if (!this.isDesignerEnvironment()) {
      this.isInvalidInstallationEnvironment.set(true);
      setTimeout(
        () => this.isInvalidInstallationEnvironment.set(false),
        delayTimeBeforeHideMessage
      );
    }
  }
  getInstallationTooltipText() {
    return `Please open the
        <a href="https://market.axonivy.com/" class="primary-color">
          Axon Ivy Market
        </a>
        inside your
        <a class="primary-color" href="https://developer.axonivy.com/download">
          Axon Ivy Designer
        </a>
        (minimum version 9.2.0)`;
  }

  onSelectVersion() {
    this.artifacts.set(this.versionMap.get(this.selectedVersion) || []);

    if (this.artifacts().length !== 0) {
      this.selectedArtifact = this.artifacts()[0];
    }
  }

  onShowDevVersion(event: Event) {
    event.preventDefault();
    this.isDevVersionsDisplayed.set(!this.isDevVersionsDisplayed());
    this.getVersionWithArtifact();
  }

  onShowVersionAndArtifact() {
    if (!this.isDropDownDisplayed() && this.artifacts.length === 0) {
      this.getVersionWithArtifact();
    }
    this.isDropDownDisplayed.set(!this.isDropDownDisplayed());
  }

  getVersionWithArtifact() {
    this.sanitizeDataBeforFetching();

    this.productService
      .sendRequestToProductDetailVersionAPI(
        this.productId,
        this.isDevVersionsDisplayed(),
        this.designerVersion
      )
      .subscribe(data => {
        data.forEach(item => {
          const version = 'Version '.concat(item.version);
          this.versions.update(currentVersions => [
            ...currentVersions,
            version
          ]);
          if (!this.versionMap.get(version)) {
            this.versionMap.set(version, item.artifactsByVersion);
          }
        });
        if (this.versions().length !== 0) {
          this.selectedVersion = this.versions()[0];
          this.onSelectVersion();
        }
      });
      
    if(this.versions.length ===0){
      console.log('aloha');
      
      this.versions.set(["a","b","c"])
    }
  }

  sanitizeDataBeforFetching() {
    this.versions.set([]);
    this.artifacts.set([]);
    this.selectedArtifact = {} as Artifact;
    this.selectedVersion = '';
  }

  downloadArifact() {
    window.open(this.selectedArtifact.downloadUrl, '_blank');
  }
}
