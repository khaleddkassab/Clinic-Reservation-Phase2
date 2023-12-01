import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/environment";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  messages: any[] = [];
  private apiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) {}

  getNotifications() {

    const url = `${this.apiUrl}messages`;

    this.http.get(url).subscribe(
      (resultData: any) => {

        this.messages = resultData;

      },
      (error) => {
        console.error("Error while retrieving slots:", error);
      }
    );
  }

}
