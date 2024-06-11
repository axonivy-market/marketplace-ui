import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { NAV_ITEMS } from './shared/constants/common.constant';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
      providers: [TranslateService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('default active nav should be Market', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('li.nav-item div.d-md-block')?.parentElement
        ?.innerHTML
    ).toContain('common.nav.market');
  });
});
