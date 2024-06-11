import { FilterType } from '../enums/filter-type.enum';
import { SortType } from '../enums/sort-type.enum';

export interface Criteria {
  url: string;
  search: string;
  sort: SortType | null;
  type: FilterType | null;
}
