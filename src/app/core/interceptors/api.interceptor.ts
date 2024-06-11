import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const REQUEST_BY = 'X-Requested-By';
export const IVY = 'ivy';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('i18n')) {
    return next(req);
  }
  let requestURL = req.url;
  let apiURL = environment.apiUrl;
  if (!requestURL.startsWith(apiURL)) {
    requestURL = `${apiURL}/${req.url}`;
  }
  const cloneReq = req.clone({
    url: requestURL,
    headers: addIvyHeaders(req.headers)
  });
  return next(cloneReq);
};

function addIvyHeaders(headers: HttpHeaders): HttpHeaders {
  if (headers.has(REQUEST_BY)) {
    return headers;
  }
  return headers.append(REQUEST_BY, IVY);
}
