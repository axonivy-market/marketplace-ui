import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, WritableSignal, signal } from '@angular/core';
import { Theme } from '../../../shared/enums/theme.enum';

const DATA_THEME = 'data-bs-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode: WritableSignal<boolean> = signal(false);
  theme: WritableSignal<Theme> = signal(Theme.DARK);

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      this.loadDefaultTheme(localStorage);
    }
  }

  loadDefaultTheme(localStorage: Storage) {
    const theme = localStorage.getItem(DATA_THEME) as Theme;
    if (theme) {
      this.setTheme(theme);
    } else {
      this.setTheme(Theme.LIGHT);
    }
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    localStorage.setItem(DATA_THEME, theme);
    document.querySelector('html')!.setAttribute(DATA_THEME, theme);
    this.theme() === Theme.DARK
      ? this.isDarkMode.set(true)
      : this.isDarkMode.set(false);
  }

  changeTheme() {
    this.theme.update((value) =>
      value === Theme.DARK ? Theme.LIGHT : Theme.DARK,
    );
    this.setTheme(this.theme());
  }
}
