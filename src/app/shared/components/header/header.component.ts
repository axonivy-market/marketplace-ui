import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { LANGUAGES, NAV_ITEMS } from '../../constants/common.constant';
import { Language } from '../../enums/language.enum';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../app.component.scss']
})
export class HeaderComponent {
  selectedNav: string = '/';
  selectedLanguage: string = Language.EN_GB;
  languages = LANGUAGES;
  isSearchBarDisplayed = false;
  isMobileMenuCollapsed = true;

  navItems: NavItem[] = NAV_ITEMS;

  themeService = inject(ThemeService);
  translateService = inject(TranslateService);
  constructor() {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  onSelectLanguage(language: string) {
    this.translateService.use(language);
  }

  onCollapsedMobileMenu() {
    this.isMobileMenuCollapsed = !this.isMobileMenuCollapsed;
  }

  onClickSearchIcon() {
    this.isSearchBarDisplayed = !this.isSearchBarDisplayed;
  }
}
