import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ContactService } from "./contact.service";
import { FormService } from "./form.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [ContactService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
