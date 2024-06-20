import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { Feedback } from '../../../../shared/models/feedback.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtService } from '../../../../shared/services/jwt.service';
import { Observable, catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  providers: [JwtService],
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss'
})
export class AddFeedbackDialogComponent {
  @Input() productId: string = '667109f11666e1352a072f8a';
  jwtService = inject(JwtService);
  http = inject(HttpClient);
  cd = inject(ChangeDetectorRef);
  feedback!: Feedback;
  username: string | null | undefined;

  constructor() { }

  ngOnInit(): void {
    this.fetchFeedbackData().subscribe(() => {
      console.log('Next operations after fetching feedback data');
    });
  }

  fetchFeedbackData() {
    const headers = new HttpHeaders().set('x-requested-by', 'ivy');
    const userId = this.jwtService.getUserIdFromToken();
    this.username = this.jwtService.getCustomFieldFromToken('name');
    
    let params = new HttpParams().set('productId', this.productId);
    if (userId) {
      params = params.set('userId', userId);
    }

    return this.http.get<Feedback>('http://localhost:8080/api/feedback', { headers, params })
      .pipe(
        catchError(error => {
          if (error.status === 404) {
            return of(null); // Return a default feedback object with an error property
          } else {
            return of(null); // Handle other errors if needed
          }
        }),
        switchMap(response => {
          if (response) {
            console.log('Response data:', response);
            this.feedback = response;
            if (this.feedback.username?.trim() !== '') {
              this.username = this.feedback.username;
            }
            console.log('Feedback data:', this.feedback);
          } else {
            console.log('No feedback found for the given user and product');
          }
          this.cd.detectChanges();
          return of(null); // Return a new observable to continue the chain
        })
      );
  }

  onSubmit(): void {
    // Assume you have a method to get the JWT token from your authentication service
    const token = this.jwtService.getTokenFromCookie('token');
    
    this.submitFeedback(this.productId, 4, "Ban tuyet voi lam", token!)
      .subscribe(
        (response) => {
          console.log('Review submitted successfully:', response);
          // Handle success as needed
        },
        (error) => {
          console.error('Error submitting review:', error);
          // Handle error as needed
        }
      );
  }

  submitFeedback(productId: string, rating: number, content: string, token: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-requested-by', 'ivy')
      .set('Authorization', `Bearer ${token}`);

    const feedback: any = {
      productId: productId,
      rating: rating,
      content: content
    };

    return this.http.post<any>('http://localhost:8080/api/feedback', feedback, { headers });
  }
}
