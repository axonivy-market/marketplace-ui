import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NavItem } from '../../models/nav-item.model';
import { NAV_ITEMS } from '../../constants/common.constant';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  themeService = inject(ThemeService);

  navItems: NavItem[] = NAV_ITEMS;
}
