import { Language } from '../enums/language.enum';
import { NavItem } from '../models/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'nav.news',
    link: 'https://developer.axonivy.com/news'
  },
  {
    label: 'nav.doc',
    link: 'https://developer.axonivy.com/doc'
  },
  {
    label: 'nav.tutorial',
    link: 'https://developer.axonivy.com/tutorial'
  },
  {
    label: 'nav.community',
    link: 'https://community.axonivy.com/'
  },
  {
    label: 'nav.team',
    link: 'https://developer.axonivy.com/team'
  },
  {
    label: 'nav.market',
    link: '/'
  }
];

export const LANGUAGES = [
  {
    value: Language.EN_GB,
    label: 'English'
  },
  {
    value: Language.FR_FR,
    label: 'French'
  }
];
