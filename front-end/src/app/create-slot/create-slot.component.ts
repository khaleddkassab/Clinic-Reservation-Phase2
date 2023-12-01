import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../enviroments/environment";

@Component({
  selector: 'app-patient',
  templateUrl: './create-slot.component.html',
  styleUrls: ['./create-slot.component.scss']
})
export class CreateSlotComponent {
  token: string | null = null;
  private apiUrl = environment.backendApiUrl;

  startTime: string = '2011-11-01T11:00:00';
  endTime: string = '2012-11-01T12:00:00';


  constructor(private http: HttpClient) {
  }

  createSlot() {


    let bodyData = {
      "startTime": this.startTime,
      "endTime": this.endTime

    };
    const url = `${this.apiUrl}createSlot`;
    this.http.post(url, bodyData).subscribe((resultData: any) => {


      alert("Slot Created successfully");
      this.clearData();
    },
      (error) => {
        alert('UnAuthorized.');
        console.error("Error:", error);
      });

  }

  clearData() {
    this.startTime = '';
    this.endTime = '';

  }
}
