import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SeeSlotsByDoctorIdComponent } from './see-slot-by-doctor-id/see-slots-by-doctor-id.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CreateSlotComponent } from './create-slot/create-slot.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { ReserveSlotComponent } from './reserve-slot/reserve-slot.component';
import { LoginComponent } from './login/login.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import {TokenInterceptor} from "./token.interceptor";
import { LogoutComponent } from './logout/logout.component';
import { ViewPatientReservationsComponent } from './view-patient-reservations/view-patient-reservations.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { HomePatientComponent } from './home-patent/home-patient.component';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ErrorPageComponent } from './error-page/error-page.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SeeSlotsByDoctorIdComponent,
    CreateSlotComponent,
    UpdateReservationComponent,
    DeleteReservationComponent,
    ReserveSlotComponent,
    LoginComponent,
    LogoutComponent,
    ViewPatientReservationsComponent,
    DoctorScheduleComponent,
    AuthPageComponent,
    HomePatientComponent,
    HomeDoctorComponent,
    NavBarComponent,
    HomeComponent,
    NotificationsComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
