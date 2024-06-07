import { FilterType } from '../enums/filter-type.enum';
import { Language } from '../enums/language.enum';
import { SortType } from '../enums/sort-type.enum';
import { NavItem } from '../models/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'common.nav.news',
    link: 'https://developer.axonivy.com/news'
  },
  {
    label: 'common.nav.doc',
    link: 'https://developer.axonivy.com/doc'
  },
  {
    label: 'common.nav.tutorial',
    link: 'https://developer.axonivy.com/tutorial'
  },
  {
    label: 'common.nav.community',
    link: 'https://community.axonivy.com/'
  },
  {
    label: 'common.nav.team',
    link: 'https://developer.axonivy.com/team'
  },
  {
    label: 'common.nav.market',
    link: '/'
  }
];

export const SOCIAL_MEDIA_LINK = [
  {
    styleClass: 'fab fa-linkedin',
    url: '/'
  },
  {
    styleClass: 'fab fa-xing',
    url: '/'
  },
  {
    styleClass: 'fab fa-youtube',
    url: '/'
  },
  {
    styleClass: 'fab fa-facebook',
    url: '/'
  }
];

export const IVY_FOOTER_LINKS = [
  {
    containerStyleClass: 'p-2 w-md-100',
    label: 'common.footer.ivyCompanyInfo'
  },
  {
    containerStyleClass: 'p-2',
    label: 'common.footer.privayPolicy'
  },
  {
    containerStyleClass: 'p-2',
    label: 'common.footer.termsOfService'
  }
];

export const LANGUAGES = [
  {
    value: Language.EN_GB,
    label: 'common.language.english'
  },
  {
    value: Language.FR_FR,
    label: 'common.language.french'
  },
  {
    value: Language.DE_DE,
    label: 'common.language.german'
  }
];

export const FILTER_TYPES = [
  {
    value: FilterType.All_TYPES,
    label: 'common.filter.value.allTypes'
  },
  {
    value: FilterType.CONNECTORS,
    label: 'common.filter.value.connector'
  },
  {
    value: FilterType.UTILITIES,
    label: 'common.filter.value.util'
  },
  {
    value: FilterType.SOLUTION,
    label: 'common.filter.value.solution'
  }
];

export const SORT_TYPES = [
  {
    value: SortType.POPULARITY,
    label: 'common.sort.value.popularity'
  },
  {
    value: SortType.ALPHABETICALLY,
    label: 'common.sort.value.alphabetically'
  },
  {
    value: SortType.RECENT,
    label: 'common.sort.value.recent'
  }
];

export const COMMENTS = [
  {
    userName: 'Khanh',
    comment: "c1",
  },
  {
    userName: 'Dinh',
    comment: "c1",
  },
  {
    userName: 'Khanh',
    comment: "c1",
  },
  {
    userName: 'Khanh',
    comment: "c1",
  },
  {
    userName: 'Khanh',
    comment: "c1",
  },
  {
    userName: 'Khanh',
    comment: "c1",
  }
];