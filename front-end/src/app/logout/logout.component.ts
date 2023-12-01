import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    if (!this.authService.isAuthenticated()) {
      // Handle invalid input or show an error message
      alert('Unauthorized.');
      return;
    }

    this.authService.clearToken();
    this.authService.clearUser();
    alert("Logout successful");

    // Redirect to the home page ("/") after logging out
    this.router.navigate(['/']);
  }
}

