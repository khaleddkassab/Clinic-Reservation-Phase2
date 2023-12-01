import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {SeeSlotsByDoctorIdComponent} from "./see-slot-by-doctor-id/see-slots-by-doctor-id.component";
import {CreateSlotComponent} from "./create-slot/create-slot.component";
import {UpdateReservationComponent} from "./update-reservation/update-reservation.component";
import {DeleteReservationComponent} from "./delete-reservation/delete-reservation.component";
import {LoginComponent} from "./login/login.component";
import {ReserveSlotComponent} from "./reserve-slot/reserve-slot.component";
import {LogoutComponent} from "./logout/logout.component";
import {ViewPatientReservationsComponent} from "./view-patient-reservations/view-patient-reservations.component";
import {DoctorScheduleComponent} from "./doctor-schedule/doctor-schedule.component";
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {HomePatientComponent} from "./home-patent/home-patient.component";
import {HomeDoctorComponent} from "./home-doctor/home-doctor.component";
import {HomeComponent} from "./home/home.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path:'', component: AuthPageComponent},
  //{path:'homePatient', component: HomePatientComponent},
  //{path:'homeDoctor', component: HomeDoctorComponent},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'slot', component:SeeSlotsByDoctorIdComponent, canActivate: [AuthGuard]},
  {path:'reserveSlot', component:ReserveSlotComponent, canActivate: [AuthGuard]},
  {path:'createSlot', component:CreateSlotComponent, canActivate: [AuthGuard]},
  {path:'updateReservation', component:UpdateReservationComponent, canActivate: [AuthGuard]},
  {path:'deleteReservation', component:DeleteReservationComponent, canActivate: [AuthGuard]},
  {path:'logout', component:LogoutComponent, canActivate: [AuthGuard]},
  {path:'viewMyReservations', component:ViewPatientReservationsComponent, canActivate: [AuthGuard]},
  {path:'doctorSchedule', component:DoctorScheduleComponent, canActivate: [AuthGuard]},
  {path:'notifications', component:NotificationsComponent, canActivate: [AuthGuard]},
  {path:'error', component:ErrorPageComponent},

  { path: '**', redirectTo: '/error' }, // Redirect any unknown paths to the error component





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
