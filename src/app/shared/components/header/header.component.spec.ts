import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
// import { ProductFilterComponent } from '../../modules/product/product-filter/product-filter.component';


class TranslateServiceStub {
  get(key: any): any {
    return of(key);
  }

  setDefaultLang(lang: string) {}

  use(lang: string) {
    return of({});
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectLanguage should call translateService', () => {
    spyOn(component.translateService, 'use').and.stub();
    component.onSelectLanguage('en');
    expect(component.translateService.use).toHaveBeenCalled();
  });
});
