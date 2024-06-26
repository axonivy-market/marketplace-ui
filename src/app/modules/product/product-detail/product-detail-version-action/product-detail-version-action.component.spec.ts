import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductDetailVersionActionComponent } from './product-detail-version-action.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProductService } from '../../product.service';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { Artifact } from '../../../../shared/models/vesion-artifact.model';
describe('ProductVersionActionComponent', () => {
  let component: ProductDetailVersionActionComponent;
  let fixture: ComponentFixture<ProductDetailVersionActionComponent>;
  let productServiceMock: any;

  beforeEach(() => {
    productServiceMock = jasmine.createSpyObj('ProductService', [
      'sendRequestToProductDetailVersionAPI'
    ]);

    TestBed.configureTestingModule({
      imports: [ProductDetailVersionActionComponent, TranslateModule.forRoot()],
      providers: [
        TranslateService,
        provideHttpClient(),
        { provide: ProductService, useValue: productServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailVersionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validation message should appear while not install in AI designer & disappear after 2s', fakeAsync(() => {
    expect(component.isDesignerEnvironment()).toBeFalse();
    const installButton = fixture.debugElement.query(By.css('.btn__install'));
    let warningDialog = fixture.debugElement.query(
      By.css('.invalid-installation-environment__warning')
    );

    expect(warningDialog).toBeNull();
    installButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    warningDialog = fixture.debugElement.query(
      By.css('.invalid-installation-environment__warning')
    );
    expect(warningDialog).toBeTruthy();

    tick(3000);
    fixture.detectChanges();
    warningDialog = fixture.debugElement.query(
      By.css('.invalid-installation-environment__warning')
    );
    expect(warningDialog).toBeNull();
  }));

  it('first artifact should be chosen when select corresponding version', () => {
    component.onSelectVersion();
    expect(component.artifacts().length).toBe(0);

    const selectedVersion = 'Version 10.0.2';
    const artifact = {
      name: 'Example Artifact',
      downloadUrl: 'https://example.com/download',
      isProductArtifact: true
    } as Artifact;
    component.versions.set([selectedVersion]);
    component.versionMap.set(selectedVersion, [artifact]);
    component.selectedVersion = selectedVersion;
    component.onSelectVersion();

    expect(component.artifacts().length).toBe(1);
    expect(component.selectedArtifact).toEqual(artifact);
  });

  it('all of state should be reset before call rest api', () => {
    const selectedVersion = 'Version 10.0.2';
    const artifact = {
      name: 'Example Artifact',
      downloadUrl: 'https://example.com/download',
      isProductArtifact: true
    } as Artifact;
    component.selectedVersion = selectedVersion;
    component.selectedArtifact = artifact;
    component.versions().push(selectedVersion);
    component.artifacts().push(artifact);

    expect(component.versions().length).toBe(1);
    expect(component.artifacts().length).toBe(1);
    expect(component.selectedVersion).toBe(selectedVersion);
    expect(component.selectedArtifact).toBe(artifact);
    component.sanitizeDataBeforFetching();
    expect(component.versions().length).toBe(0);
    expect(component.artifacts().length).toBe(0);
    expect(component.selectedVersion).toEqual('');
    expect(component.selectedArtifact).toEqual({} as Artifact);
  });

  it('should call sendRequestToProductDetailVersionAPI and update versions and versionMap', () => {
    const { mockArtifct1, mockArtifct2 } = mockApiWithExpectedResponse();

    component.getVersionWithArtifact();

    expect(
      productServiceMock.sendRequestToProductDetailVersionAPITest
    ).toHaveBeenCalledWith(
      component.productId,
      component.isDevVersionsDisplayed(),
      component.designerVersion
    );

    expect(component.versions()).toEqual(['Version 1.0', 'Version 2.0']);
    expect(component.versionMap.get('Version 1.0')).toEqual([mockArtifct1]);
    expect(component.versionMap.get('Version 2.0')).toEqual([mockArtifct2]);
    expect(component.selectedVersion).toBe('Version 1.0');
  });

  it('should open the artifact download URL in a new window', () => {
    spyOn(window, 'open');
    component.selectedArtifact = {
      downloadUrl: 'https://example.com/download'
    } as Artifact;
    component.downloadArifact();
    expect(window.open).toHaveBeenCalledWith(
      'https://example.com/download',
      '_blank'
    );
  });
  it('should call getVersionWithArtifact and toggle isDropDownDisplayed', () => {
    expect(component.isDropDownDisplayed()).toBeFalse();

    mockApiWithExpectedResponse();
    component.onShowVersionAndArtifact();
    expect(component.isDropDownDisplayed()).toBeTrue();
  });

  it('should send Api to get DevVersion', () => {
    expect(component.isDevVersionsDisplayed()).toBeFalse();
    mockApiWithExpectedResponse();
    const event = new Event('click');
    spyOn(event, 'preventDefault');
    component.onShowDevVersion(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.isDevVersionsDisplayed()).toBeTrue();
  });

  function mockApiWithExpectedResponse() {
    const mockArtifct1 = {
      name: 'Example Artifact1',
      downloadUrl: 'https://example.com/download',
      isProductArtifact: true
    } as Artifact;
    const mockArtifct2 = {
      name: 'Example Artifact2',
      downloadUrl: 'https://example.com/download',
      isProductArtifact: true
    } as Artifact;
    const mockData = [
      {
        version: '1.0',
        artifactsByVersion: [mockArtifct1]
      },
      {
        version: '2.0',
        artifactsByVersion: [mockArtifct2]
      }
    ];

    productServiceMock.sendRequestToProductDetailVersionAPITest.and.returnValue(
      of(mockData)
    );
    return { mockArtifct1, mockArtifct2 };
  }
});
