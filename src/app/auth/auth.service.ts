import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, Observer, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  private githubAuthUrl = `https://github.com/login/oauth/authorize`;
  private apiAuthExchangeCodeEndpoint = `${environment.apiUrl}/auth/github/exchange-code`;

  http = inject(HttpClient);
  router = inject(Router);

  redirectToGitHub(originalUrl: string) {
    const state = encodeURIComponent(originalUrl);
    const authUrl = `${this.githubAuthUrl}?client_id=${environment.githubClientId}&redirect_uri=${environment.githubAuthCallbackUrl}&state=${state}`;
    window.location.href = authUrl;
  }

  /**
   * Handles GitHub callback by exchanging code for token.
   * @param code The authorization code received from GitHub callback.
   * @param state The state parameter received from GitHub callback (used for redirection).
   */
  handleGitHubCallback(code: string, state: string) {
    const body = { code };
    const headers = new HttpHeaders().set('x-requested-by', 'ivy');

    this.exchangeCodeForToken(body, headers).subscribe(
      response => {
        this.handleTokenResponse(response.token, state);
      },
      error => {
        console.error('Error occurred during token exchange:', error);
        // Handle error (e.g., redirect to an error page)
      }
    );
  }

  /**
   * Sends a POST request to exchange authorization code for an access token.
   * @param body The request body containing code and state.
   * @param headers The HttpHeaders for the request.
   * @returns Observable<any> The observable for the HTTP POST request.
   */
  private exchangeCodeForToken(
    body: any,
    headers: HttpHeaders
  ): Observable<any> {
    return this.http.post<any>(this.apiAuthExchangeCodeEndpoint, body, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred during HTTP request:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Handles the response containing the access token.
   * @param token The access token received from the backend.
   * @param state The state parameter used for redirection.
   */
  private handleTokenResponse(token: string, state: string): void {
    // Store token securely (e.g., in localStorage or a secure cookie)
    document.cookie = `token=${token}; path=/; max-age=${365 * 86400}`;

    // Redirect to the original URL (e.g., /product/{productName})
    this.router.navigate([`/product/${state}`], {
      queryParams: { showAddFeedbackDialog: 'true' }
    });
  }
}