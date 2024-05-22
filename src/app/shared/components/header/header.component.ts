import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnDestroy, inject } from '@angular/core';
import { Theme } from '../../enums/theme.enum';
import { NavItem } from '../../models/nav-item.model';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { Subscription } from 'rxjs';

const DATA_THEME = 'data-bs-theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedNav: string = '/';

  navItems: NavItem[] = [
    {
      label: 'News',
      link: 'https://developer.axonivy.com/news',
    },
    {
      label: 'Doc',
      link: 'https://developer.axonivy.com/doc',
    },
    {
      label: 'Tutorial',
      link: 'https://developer.axonivy.com/tutorial',
    },
    {
      label: 'Community',
      link: 'https://community.axonivy.com/',
    },
    {
      label: 'Team',
      link: 'https://developer.axonivy.com/team',
    },
    {
      label: 'Market',
      link: '/',
    },
  ];

  themeService = inject(ThemeService);
}
