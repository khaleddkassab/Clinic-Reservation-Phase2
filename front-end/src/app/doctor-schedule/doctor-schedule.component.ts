import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/environment";

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent {
  slots: any[] = [];
  private apiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) {}

  getSlots() {

    const url = `${this.apiUrl}doctors/doctorSchedule`;

    this.http.get(url).subscribe(
      (resultData: any) => {

        this.slots = resultData;

      },
      (error) => {
        alert('UnAuthorized.');
        console.error("Error:", error);
      }
    );
  }

  cancelReservation(slotId: string) {

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

  deleteReservation(slotId: string) {

    const url = `${this.apiUrl}cancelSlot`;
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
