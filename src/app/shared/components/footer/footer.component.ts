import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isDarkMode!: boolean;

  subscriptions: Subscription[] = [];

  themeService = inject(ThemeService);

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
}
