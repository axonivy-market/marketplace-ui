import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('i18n')) {
    return next(req);
  }
  const cloneReq = req.clone({ url: `${environment.apiUrl}/${req.url}`, headers: addIvyHeaders(req.headers) });
  return next(cloneReq);
};

function addIvyHeaders(headers: HttpHeaders): HttpHeaders {
  if (headers.has("X-Requested-By")) {
    return headers;
  }
  return headers.append("X-Requested-By", "ivy");
}
