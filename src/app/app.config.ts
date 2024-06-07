import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { routes } from './app.routes';
import { HttpLoaderFactory } from './core/configs/translate.config';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { MARKED_OPTIONS, MarkdownModule } from 'ngx-markdown';
import { markedOptionsFactory } from './core/configs/markdown.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([apiInterceptor])),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    importProvidersFrom(
      MarkdownModule.forRoot({
        markedOptions: {
          provide: MARKED_OPTIONS,
          useFactory: markedOptionsFactory
        }
      })
    )
  ]
};
