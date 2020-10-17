import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormService } from "../form.service";
import { catchError } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { FormInit } from "../../form-init";
import { Observable, throwError } from "rxjs";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  success = false;
  data: Observable<FormInit>;
  FeedbackForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    feedback: new FormControl(""),
    comment: new FormControl("")
  });
  constructor(private form: FormService) {}

  ngOnInit() {
    this.set_form();
  }
  set_form() {
    this.data = this.form.GET().pipe(
      tap(data => {
        this.FeedbackForm.patchValue(data);
      })
    );
  }
  onSubmit() {
    var out = this.FeedbackForm.value;
    this.form.POST(out).subscribe(
      data => {
        console.log(data);
        this.success = true;
        window.alert("form succeeded");
      },
      errors => {
        window.alert("form failed");
        console.log(errors);
      }
    );
    this.set_form();
  }
}
