import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../enviroments/environment";

@Component({
  selector: 'app-update-resrvation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent {
  currentSlotId: string = '';
  newSlotId: string = '';
  private apiUrl = environment.backendApiUrl;


  constructor(private http: HttpClient) {
  }

  updateReservation() {
    let bodyData = {
      "currentSlotId": this.currentSlotId,
      "newSlotId": this.newSlotId

    };
    const url = `${this.apiUrl}update-reservation`;

    this.http.put(url, bodyData).subscribe((resultData: any) => {

      console.log(resultData);
      alert("Reservation Updated Successfully");
      this.clearData();
    },
      (error) => {
        alert("Error while Updating Reservation:");

        console.error("Error while Updating Reservation:", error);
      });
  }

  clearData() {
    this.currentSlotId = '';
    this.newSlotId = '';

  }
}
