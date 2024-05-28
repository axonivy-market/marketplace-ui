import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import {
  FILTER_TYPES,
  SORT_TYPES
} from '../../../shared/constants/common.constant';
import { FilterType } from '../../../shared/enums/filter-type.enum';
import { SortType } from '../../../shared/enums/sort-type.enum';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<FilterType>();
  @Output() sortChange = new EventEmitter<SortType>();

  selectedFilterType = '';
  filterTypes = FILTER_TYPES;
  selectedSortType: SortType = SortType.POPULARITY;
  sortTypes = SORT_TYPES;

  searchText: string = '';

  themeService = inject(ThemeService);
  translateService = inject(TranslateService);

  onSelectFilterType(type: FilterType) {
    this.filterChange.emit(type);
  }

  onSearchChanged(searchString: string) {
    this.searchChange.next(searchString);
  }

  onSortChange() {
    this.sortChange.next(this.selectedSortType);
  }
}
