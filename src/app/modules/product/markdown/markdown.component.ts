import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})
export class MarkdownComponent {
  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  get content() {
    return this.httpClient.get('assets/markdown/README.md', {
      responseType: 'text'
    });
  }
}
