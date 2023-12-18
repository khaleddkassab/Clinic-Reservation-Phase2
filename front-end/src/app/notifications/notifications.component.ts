import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  messages: any[] = [];
  private apiUrl ;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }

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
