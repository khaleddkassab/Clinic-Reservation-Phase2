import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-delete-resrvation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.scss']
})
export class DeleteReservationComponent {
  slotId: string = '';
  private apiUrl;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }

  deleteReservation() {
    let bodyData = {
      "slotId": this.slotId

    };
    const url = `${this.apiUrl}delete-reservation`;
    this.http.delete(url+"/"+ this.slotId).subscribe((resultData: any) => {


      console.log(resultData);
      alert("Reservation Deleted Successfully");
      this.clearData();
    },
      (error) => {
        alert('UnAuthorized.');
        console.error("Error:", error);
      });
  }

  clearData() {
    this.slotId = '';

  }
}
