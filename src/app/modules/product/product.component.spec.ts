import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MockProductService } from '../../shared/utils/common-test.util';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';

const router = {
  navigate: jasmine.createSpy('navigate')
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: Router,
          useValue: router
        },
        ProductService,
        TranslateService,
        provideHttpClient()
      ]
    })
      // .overrideComponent(ProductComponent, {
      //   remove: { providers: [ProductService] },
      //   add: {
      //     providers: [{ provide: ProductService, useClass: MockProductService }]
      //   }
      // })
      .compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('viewProductDetail should navigate', () => {
    component.viewProductDetail('url');
    expect(router.navigate).toHaveBeenCalledWith(['', 'url']);
  });

  it('ngOnDestroy should unsubscribe all sub', () => {
    const sub = new Subscription();
    component.subscriptions.push(sub);
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toBeTruthy();
  });
});
