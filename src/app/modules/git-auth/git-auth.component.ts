import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor() {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        // Handle the authorization code, typically by exchanging it for an access token
        console.log('Authorization code:', code);

        // Exchange the authorization code for an access token
        // You would typically do this by calling your backend server
        if (code) {
          // use BE to get user info
        }
      }
    });
  }
}
