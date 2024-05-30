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

export const LANGUAGES = [
  {
    value: Language.EN_GB,
    label: 'common.language.english'
  },
  {
    value: Language.FR_FR,
    label: 'common.language.french'
  }
];

export const FILTER_TYPES = [
  {
    value: FilterType.All_TYPES,
    label: 'common.filter.allTypes'
  },
  {
    value: FilterType.CONNECTORS,
    label: 'common.filter.connector'
  },
  {
    value: FilterType.UTILITIES,
    label: 'common.filter.util'
  },
  {
    value: FilterType.SOLUTION,
    label: 'common.filter.solution'
  }
];

export const SORT_TYPES = [
  {
    value: SortType.POPULARITY,
    label: 'common.sort.popularity'
  },
  {
    value: SortType.ALPHABETICALLY,
    label: 'common.sort.alphabetically'
  },
  {
    value: SortType.RECENT,
    label: 'common.sort.recent'
  }
];
