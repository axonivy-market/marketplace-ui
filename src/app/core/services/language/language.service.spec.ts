import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { Language } from '../../../shared/enums/language.enum';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LanguageService],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    document.defaultView?.localStorage.clear();
    expect(service).toBeTruthy();
  });

  it('should get default language en-GB', () => {
    document.defaultView?.localStorage.clear();
    expect(service.getSelectedLanguage()).toEqual(Language.EN_GB);
  });

  it('should change to language de-DE', ()=> {
    service.loadLanguage("de-DE");
    expect(service.getSelectedLanguage()).toEqual(Language.DE_DE);
  });
});
