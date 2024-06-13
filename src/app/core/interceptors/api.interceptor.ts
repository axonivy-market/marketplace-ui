import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../services/loading/loading.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

/** This is option for exclude loading api
 * @Example return httpClient.get('apiEndPoint', { context: new HttpContext().set(SkipLoading, true) })
 */
export const SkipLoading = new HttpContextToken<boolean>(() => false);

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (req.url.includes('i18n')) {
    return next(req);
  }
  const cloneReq = req.clone({
    headers: req.headers.set('X-Requested-By', 'ivy'),
    url: `${environment.apiUrl}/${req.url}`
  });

  if (req.context.get(SkipLoading)) {
    return next(cloneReq);
  }

  loadingService.show();

  return next(cloneReq).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
