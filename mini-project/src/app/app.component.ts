import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-project';

  contactList : contact[] =
  [
    {firstname:"Ram", lastname:".V",mobileNo:8454069811},
    {firstname:"Sunil", lastname:"Pillai",mobileNo:9819111204}

  ]

  addContact()
  {
    this.contactList.push({firstname:"Test", lastname:".V",mobileNo:111111111})
  }

  deleteContact(i:number)
  {
    //delete this.contactList[i];
    this.contactList.splice(i, 1);  

  }
  

}

export class contact
{
  firstname:string;
  lastname:string;
  mobileNo:number;

}