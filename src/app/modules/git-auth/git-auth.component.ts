import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-git-auth',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './git-auth.component.html',
  styleUrl: './git-auth.component.scss'
})
export class GitAuthComponent {
  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  router = inject(Router);
  productId!: string;

  constructor() {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      this.productId = params['productId'];
      if (code) {
        console.log('Authorization code:', code);
        this.exchangeCodeForToken(code);
      }
    });
  }

  exchangeCodeForToken(code: string): void {
    const endpoint = 'auth/exchange-code';
    const body = { code };

    const headers = new HttpHeaders().set('x-requested-by', 'ivy');

    // Define an observer with next and error methods
    const observer: Observer<any> = {
      next: response => {
        console.log('Server response:', response.token);
        document.cookie = 'token=' + response.token +';path=/;max-age=' + (365 * 86400);
        this.router.navigate([`/${this.productId}`], { queryParams: { showPopup: 'true' } });
      },
      error: error => {
        console.error('Error occurred:', error);
      },
      // complete is optional
      complete: () => {
        console.log('Request completed');
      }
    };

    // Make the HTTP POST request
    this.http.post(endpoint, body, {headers}).subscribe(observer);
  }
}
