import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from "../config.service";
import {environment} from "../../enviroments/environment";

@Component({
  selector: 'app-patient',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  role: string = 'patient'; // Set a default value for the role
  password: string = '';
  private apiUrl

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }


  register() {
    let bodyData = {
      "fullName": this.fullName,
      "email": this.email,
      "role": this.role,
      "password": this.password
    };
    const url = `${this.apiUrl}register`;

    this.http.post(url, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Patient registered successfully");
      this.clearData();
    });
  }

  clearData() {
    this.fullName = '';
    this.email = '';
    this.role = 'patient'; // Reset the role to 'patient'
    this.password = '';
  }
}
