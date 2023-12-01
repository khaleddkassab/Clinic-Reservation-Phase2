import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private authService: AuthService,private router:Router) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/']);
  }
  register() {
    this.router.navigate(['/register']);
  }
  getRegisterLink(): string {
    // If the current route is /login, return /register; otherwise, return /login
    return this.router.url === '/login' ? '/register' : '/login';
  }
  getButtonText(): string {
    // If the current route is /login, return 'Register'; otherwise, return 'Login'
    return this.router.url === '/login' ? 'Register' : 'Login';
  }
  getHomeLink(): string {
    return this.isLoggedIn() ? '/home' : '/';
  }
  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }
  isHomePage(): boolean {
    return this.router.url === '/';
  }

}
