import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnDestroy, inject } from '@angular/core';
import { Theme } from '../../enums/theme.enum';
import { NavItem } from '../../models/nav-item.model';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NAV_ITEMS } from '../../constants/common.constant';

const DATA_THEME = 'data-bs-theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedNav: string = '/';
  selectedLanguage: string = 'en-GB';

  navItems: NavItem[] = NAV_ITEMS;

  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  constructor() {
    this.translateService.setDefaultLang('en-GB');
    this.translateService.use('en-GB');
  }

  onSelectLanguage(language: string) {
    this.translateService.use(language);
  }
}
