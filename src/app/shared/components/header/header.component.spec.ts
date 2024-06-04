import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

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
      providers: [TranslateService]
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

  it('should toggle the search input visibility on search icon click', () => {
    const searchIcon = fixture.debugElement.query(
      By.css('.header__search-button i')
    );
    const searchInput = fixture.debugElement.query(
      By.css('.header__search-input')
    );

    expect(component.isSearchBarDisplayed).toBeFalse();
    expect(searchInput.attributes['hidden']).toBeDefined();

    // Click the search icon
    searchIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isSearchBarDisplayed).toBeTrue();
    expect(searchInput.attributes['hidden']).toBeUndefined();

    // Click the search icon again
    searchIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isSearchBarDisplayed).toBeFalse();
    expect(searchInput.attributes['hidden']).toBeDefined();
  });

  it('should toggle the mobile menu on click', () => {
    const navbarToggler = fixture.debugElement.query(
      By.css('.navbar-toggler span')
    );

    expect(component.isMobileMenuCollapsed).toBeTrue();

    // Click the mobile menu toggler
    navbarToggler.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isMobileMenuCollapsed).toBeFalse();

    // Click the mobile menu toggler again
    navbarToggler.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isMobileMenuCollapsed).toBeTrue();
  });

  it('should toggle the theme on theme button click', () => {
    spyOn(component.themeService, 'changeTheme').and.callThrough();
    const themeButton = fixture.debugElement.query(
      By.css('.header__theme-button div')
    );

    // Click the theme button
    themeButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.themeService.changeTheme).toHaveBeenCalled();
  });
});
