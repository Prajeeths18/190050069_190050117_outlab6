import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ContactService } from "./contact.service";
import { FormService } from "./form.service";

const routes: Routes = [{ path: "contact", component: ContactPageComponent },
      { path: "form", component: FormComponent },
      { path: "**", redirectTo: "contact" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
