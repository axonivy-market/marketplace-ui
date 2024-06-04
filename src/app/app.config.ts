import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { parse } from 'yaml';
import { routes } from './app.routes';
import { apiInterceptor } from './core/interceptors/api.interceptor';

class TranslateYamlHttpLoader implements TranslateLoader {
  constructor(
    private readonly http: HttpClient,
    public path: string = '/assets/i18n/',
  ) {}

  public getTranslation(lang: string): Observable<Object> {
    return this.http
      .get(`${this.path}${lang}.yaml`, { responseType: 'text' })
      .pipe(map((data) => parse(data)));
  }
}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateYamlHttpLoader(httpClient);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([apiInterceptor])),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ],
};
