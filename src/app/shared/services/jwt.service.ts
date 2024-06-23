import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable()
export class JwtService {

  constructor() { }

  public getUserIdFromToken(): string | null {
    const token = this.getTokenFromCookie('token');
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.sub ?? null;
    }
    return null;
  }

  getCustomFieldFromToken(fieldName: string): string | null {
    const token = this.getTokenFromCookie('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      
      return decoded[fieldName] ?? null;
    }
    return null;
  }

  getTokenFromCookie(cookieName: string): string | null {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name.trim() === cookieName) {
        return value;
      }
    }
    return null;
  }
}