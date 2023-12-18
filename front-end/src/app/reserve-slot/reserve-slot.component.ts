import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-reserve-slot',
  templateUrl: './reserve-slot.component.html',
  styleUrls: ['./reserve-slot.component.scss']
})
export class ReserveSlotComponent {
  doctorId: string='';
  slotId: string = '';

  private apiUrl ;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.getApiBaseUrl();
  }

  reserveSlot() {
    let bodyData = {
      "slotId": this.slotId


    };
    const url = `${this.apiUrl}reserve-slot`;

    this.http.post(url,bodyData).subscribe((resultData: any) => {

      alert("Slot is Reserved Successfully");
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
