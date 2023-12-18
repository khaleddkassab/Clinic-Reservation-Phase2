// see-slots-by-doctor-id.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-slot',
  templateUrl: './see-slots-by-doctor-id.component.html',
  styleUrls: ['./see-slots-by-doctor-id.component.scss']
})
export class SeeSlotsByDoctorIdComponent implements OnInit {
  doctorId: string = '';
  slots: any[] = [];
  private apiUrl ;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }
  ngOnInit() {

  }

  onDoctorIdChange() {
    // Call getSlots when the doctorId is changed
    this.getSlots();
  }

  getSlots() {
    if (!this.doctorId) {
      alert('Doctor ID is required.');
      return;
    }
    const url = `${this.apiUrl}doctors/slots`;

    this.http.get(url + "/" + this.doctorId).subscribe(
      (resultData: any) => {
        this.slots = resultData;
        this.clearData();
      },
      (error) => {
        alert("Doctor ID is incorrect");
        console.error("Error while retrieving slots:", error);
      }
    );
  }

  getAllSlots() {
    const url = `${this.apiUrl}doctors/allSlots`;

    this.http.get(url).subscribe(
      (resultData: any) => {
        this.slots = resultData;
        this.clearData();
      },
      (error) => {
        alert("Error while retrieving slots:");
      }
    );
  }

  clearData() {
    this.doctorId = '';
  }

  reserveSlot(sid: string, did: string) {
    let bodyData = {
      "doctorId": did.toString(),
      "slotId": sid.toString()
    };
    const url = `${this.apiUrl}reserve-slot`;

    this.http.post(url, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Slot is Reserved Successfully");
    });
  }
}
