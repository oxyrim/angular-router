import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RoutingModule } from './router/routing';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthFormComponent,
    AppointmentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
