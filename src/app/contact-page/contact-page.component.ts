import { Component, OnInit } from '@angular/core';
import { ContactService }  from '../contact.service'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  admins;
  constructor(
    private contactservice:ContactService
  ) { }

  ngOnInit() {
    this.admins=this.contactservice.getAdmins();
  }

}
