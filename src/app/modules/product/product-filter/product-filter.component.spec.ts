import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FilterType } from '../../../shared/enums/filter-type.enum';
import { ProductFilterComponent } from './product-filter.component';
import { SortType } from '../../../shared/enums/sort-type.enum';

describe('ProductFilterComponent', () => {
  let component: ProductFilterComponent;
  let fixture: ComponentFixture<ProductFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelectFilterType should update selected type', () => {
    spyOn(component.filterChange, 'emit').and.stub();
    component.onSelectFilterType(FilterType.CONNECTORS);
    expect(component.selectedFilterType).toBe(FilterType.CONNECTORS);
    expect(component.filterChange.emit).toHaveBeenCalledWith(
      FilterType.CONNECTORS
    );
  });

  it('onSearchChanged should call searchChange', () => {
    spyOn(component.searchChange, 'next').and.stub();
    component.onSearchChanged('Product');
    expect(component.searchChange.next).toHaveBeenCalledWith('Product');
  });

  it('onSortChange should call sortChange', () => {
    component.selectedSortType = SortType.POPULARITY;
    spyOn(component.sortChange, 'next').and.stub();
    component.onSortChange();
    expect(component.sortChange.next).toHaveBeenCalledWith(SortType.POPULARITY);
  });
});
