import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = environment.apiUrl;
  private readonly TOKEN_KEY = 'token';
  private readonly githubAuthUrl = 'https://github.com/login/oauth/authorize';
  private readonly githubAuthCallbackUrl = environment.githubAuthCallbackUrl;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  // Login related functions

  redirectToGitHub(originalUrl: string): void {
    const state = encodeURIComponent(originalUrl);
    const authUrl = `${this.githubAuthUrl}?client_id=${environment.githubClientId}&redirect_uri=${this.githubAuthCallbackUrl}&state=${state}`;
    window.location.href = authUrl;
  }

  handleGitHubCallback(code: string, state: string): void {
    const body = { code };
    const headers = new HttpHeaders().set('x-requested-by', 'ivy');

    this.exchangeCodeForToken(body, headers)
      .subscribe(
        response => this.handleTokenResponse(response.token, state),
        error => {
          console.error('Error occurred during login:', error);
          // Handle error (e.g., redirect to an error page)
        }
      );
  }

  private exchangeCodeForToken(body: any, headers: HttpHeaders): Observable<any> {
    const url = `${this.BASE_URL}/auth/github/login`;
    return this.http.post<any>(url, body, { headers })
      .pipe(
        catchError(error => {
          console.error('Error occurred during HTTP request:', error);
          return throwError(() => error);
        })
      );
  }

  private handleTokenResponse(token: string, state: string): void {
    this.setTokenAsCookie(token);
    this.router.navigate([`${state}`], {
      queryParams: { showPopup: 'true' }
    });
  }

  // Token related functions

  private setTokenAsCookie(token: string): void {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 365); // One year expiry
    this.cookieService.set(this.TOKEN_KEY, token, expiryDate);
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  getDisplayName(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded = this.decodeToken(token);
      return decoded ? decoded.name || decoded.username : null;
    }
    return null;
  }

  getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded = this.decodeToken(token);
      return decoded ? decoded.username : null;
    }
    return null;
  }

  getUserId(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded = this.decodeToken(token);
      return decoded ? decoded.sub : null;
    }
    return null;
  }
}