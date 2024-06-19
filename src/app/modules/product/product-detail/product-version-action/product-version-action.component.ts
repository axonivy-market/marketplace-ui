import { Component, inject, Input, signal } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import {
  VersionData,
  Artifact
} from '../../../../shared/models/vesion-artifact.model';

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
  versions: string[] = [];
  artifacts: Artifact[] = [];
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  isDevVersionsDisplayed = signal(false);
  isDropDownDisplayed = signal(false);
  isDesignerEnvironment: boolean = false;
  isInvalidInstallationEnvironment = signal(false);
  designerVersion: string = '';
  selectedArtifact!: Artifact;
  selectedVersion: string = '';
  productService = inject(ProductService);
  versionMap: Map<string, Artifact[]> = new Map();


  onInstallArtifact() {
    if (!this.isDesignerEnvironment) {
      this.isInvalidInstallationEnvironment.set(true);
      setTimeout(() => this.isInvalidInstallationEnvironment.set(false), 2000);
    }
  }

  onSelectVersion(){
    this.artifacts = this.versionMap.get(this.selectedVersion) || [];
    console.log(this.artifacts.length);
    
    if(this.artifacts.length != 0){
      
      this.selectedArtifact = this.artifacts[0];
      console.log(this.selectedArtifact);
    }
  }

  onShowDevVersion(event: Event) {
    event.preventDefault();
    this.isDevVersionsDisplayed.set(this.isDevVersionsDisplayed());
    this.getVersionWithArtifact();
  }

  onShowVersionAndArtifact() {
    this.isDropDownDisplayed.set(!this.isDropDownDisplayed());
    this.getVersionWithArtifact();
  }

  getVersionWithArtifact() {
    this.sanitizeDataBeforFetching();
    console.log(this.artifacts.length)
    this.productService
      .sendRequestToProductDetailVersionAPITest(
        this.productId,
        this.isDevVersionsDisplayed(),
        this.designerVersion
      )
      .subscribe(data => {
        console.log(data);

        data.forEach(item => {
          this.versions.push(item.version);
          this.versionMap.set(item.version, item.artifactsByVersion);
        });

        if(this.versions.length !=0){
          this.selectedVersion = this.versions[0];
          console.log(this.selectedVersion)
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
