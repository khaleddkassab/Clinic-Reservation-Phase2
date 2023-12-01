// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private user: any | null = null;

  // Set the token and user information
  setToken(token: string | null) {
    this.token = token;
    // You can store user information in local storage if needed
    localStorage.setItem('token', token || ''); // store an empty string if the token is null
  }
  setUser( user: any | null) {
    this.user = user;
    // You can store user information in local storage if needed
    localStorage.setItem('user', JSON.stringify(user));
  }
  // Get the token
  getToken(): string | null {
    return this.token;
  }

  // Get the authenticated user
  getAuthenticatedUser(): any | null {
    return this.user;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.token;
  }

  // Clear the token and user information (e.g., on logout)
  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  clearUser() {
    this.user = null;
    localStorage.removeItem('user');
  }
}
