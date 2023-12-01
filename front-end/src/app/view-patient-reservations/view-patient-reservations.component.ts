import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../enviroments/environment";

@Component({
  selector: 'app-view-patient-reservations',
  templateUrl: './view-patient-reservations.component.html',
  styleUrls: ['./view-patient-reservations.component.scss']
})
export class ViewPatientReservationsComponent {
  slots: any[] = [];
  private apiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) {}

  getSlots() {

    const url = `${this.apiUrl}reservations`;

    this.http.get(url).subscribe(
      (resultData: any) => {

        this.slots = resultData;

      },
      (error) => {
        alert('UnAuthorized.');
        console.error("Error while retrieving slots:", error);
      }
    );
  }
  deleteReservation(slotId: string) {

    const url = `${this.apiUrl}delete-reservation`;

    this.http.delete(url+"/"+ slotId).subscribe((resultData: any) => {


        console.log(resultData);
        alert("Reservation Deleted Successfully");

      },
      (error) => {
        alert('UnAuthorized.');
        console.error("Error:", error);
      });
  }




}
