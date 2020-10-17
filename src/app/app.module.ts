import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ContactService } from "./contact.service";
import { FormService } from "./form.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: "contact", component: ContactPageComponent },
      { path: "form", component: FormComponent },
      { path: "**", redirectTo: "contact" }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ContactPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [ContactService, FormService]
})
export class AppModule {}
