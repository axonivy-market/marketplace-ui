import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NavItem } from '../../models/nav-item.model';
import { NAV_ITEMS } from '../../constants/common.constant';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isDarkMode!: boolean;

  subscriptions: Subscription[] = [];

  themeService = inject(ThemeService);

  navItems: NavItem[] = NAV_ITEMS;
}
