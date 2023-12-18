import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  token = '';
  email: string = '';
  password: string = '';
  private apiUrl;




  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private configService: ConfigService
  ) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }

  login() {
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    const url = `${this.apiUrl}login`;

    this.http.post(url, bodyData).subscribe(
      (resultData: any) => {
        localStorage.setItem('token', resultData.accessToken);
        this.authService.setToken(resultData.accessToken);
        this.authService.setUser(resultData.user);


        this.clearData();

        // Redirect to the home page
        if (resultData.user){
          this.router.navigate(['/home']);

        }

      },
      (error) => {
        console.error('Error during login:', error);
        // Handle login error, show an alert, etc.
      }
    );
  }

  clearData() {
    this.email = '';
    this.password = '';
  }
}
