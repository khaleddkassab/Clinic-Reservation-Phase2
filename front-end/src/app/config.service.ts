import { Injectable } from '@angular/core';
import {environment} from "../enviroments/environment";

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiBaseUrl = "http://localhost:8084/";

  getApiBaseUrl(): string {
    return <string>this.apiBaseUrl;
  }

  setApiBaseUrl(apiBaseUrl: string): void {
    this.apiBaseUrl = apiBaseUrl;
  }
}
