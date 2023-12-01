import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any;  // Replace 'any' with the actual type of your user object

  constructor(private authService: AuthService) {
    // Assuming you have a method in your AuthService to get the authenticated user
    this.user = this.authService.getAuthenticatedUser();
  }

  isDoctor(): boolean {
    return this.user && this.user.role === 'doctor';
  }

  isPatient(): boolean {
    return this.user && this.user.role === 'patient';
  }

}
