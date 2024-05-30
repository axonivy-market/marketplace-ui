import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { NavItem } from '../../models/nav-item.model';
import {
  NAV_ITEMS,
  SOCIAL_MEDIA_LINK,
  IVY_FOOTER_LINKS
} from '../../constants/common.constant';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../app.component.scss']
})
export class FooterComponent {
  themeService = inject(ThemeService);
  socialMediaLinks = SOCIAL_MEDIA_LINK;
  navItems: NavItem[] = NAV_ITEMS;
  ivyFooterLinks = IVY_FOOTER_LINKS;
}
