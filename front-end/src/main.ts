import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// Access environment variable passed by Docker
const apiUrl = (window as any)['BACKEND_API_URI']+(window as any)['BACKEND_API_PORT'];

// Set the API URL in the ConfigService
import { ConfigService } from './app/config.service';
import {environment} from "./enviroments/environment";
import {enableProdMode} from "@angular/core";
const configService = new ConfigService();
configService.setApiBaseUrl(apiUrl);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
