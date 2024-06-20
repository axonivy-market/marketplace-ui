import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from '../../../constants/common.constant';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.scss'
})
export class LanguageSelectionComponent {
  languages = LANGUAGES;

  translateService = inject(TranslateService);

  onSelectLanguage(language: string) {
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }
}
