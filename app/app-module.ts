import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { StudentRegistrationPg } from './student-registration-pg/student-registration-pg';
import { CardArea } from './student-registration-pg/card-area/card-area';
import { FormArea } from './student-registration-pg/form-area/form-area';

@NgModule({
  declarations: [App, StudentRegistrationPg, CardArea, FormArea],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
