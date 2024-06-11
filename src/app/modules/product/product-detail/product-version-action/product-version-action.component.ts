import { Component, AfterViewInit, inject } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-product-version-action',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './product-version-action.component.html',
  styleUrl: './product-version-action.component.scss'
})
export class ProductVersionActionComponent {
  ngAfterViewInit() {
    const dropdownElementList = [].slice.call(
      document.querySelectorAll('.dropdown-toggle')
    );
    dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  }
  versions: string[] = ['10', '11'];
  artifacts: String[] = ['portal', 'portal app'];
  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  isVersionDropDownDisplayed = false;
  selectedArtifact: string = '10';
  selectedVersion: string = 'portal';

  onClickDownLoadButton() {
    this.isVersionDropDownDisplayed = !this.isVersionDropDownDisplayed;
  }

  downloadArifact() {
    console.log(this.selectedArtifact);
    console.log(this.selectedVersion);
  }
}
