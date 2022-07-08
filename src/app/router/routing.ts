import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AuthFormComponent } from '../auth-form/auth-form.component';

const routes: Routes = [
  { path: '', component: AuthFormComponent },
  { path: 'appointment', component: AppointmentComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
