import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('i18n')) {
    return next(req);
  }

  const cloneReq = req.clone({ url: `${environment.apiUrl}/${req.url}` });
  return next(cloneReq);
};
