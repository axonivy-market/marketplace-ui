import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FilterType } from '../../../shared/enums/filter-type.enum';
import { SortType } from '../../../shared/enums/sort-type.enum';
import { ProductFilterComponent } from './product-filter.component';

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

  it('onSelectedFilterType should update selectedFilterType correctly', () => {
    let filterElement = fixture.debugElement.queryAll(By.css('.filter-type'))[1]
      .nativeElement as HTMLDivElement;

    filterElement.dispatchEvent(new Event('click'));
    expect(component.selectedFilterType).toEqual(FilterType.CONNECTORS);
  });

  it('onSortChange should update selectedSortType correctly', () => {
    let select: HTMLSelectElement = fixture.debugElement.query(
      By.css('.sort-type')
    ).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectedSortType).toEqual(SortType.RECENT);
  });

  it('search should update searchText correctly', () => {
    let searchText = 'portal';
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = searchText;
    input.dispatchEvent(new Event('input'));
    expect(component.searchText).toEqual(searchText);
  });
});
