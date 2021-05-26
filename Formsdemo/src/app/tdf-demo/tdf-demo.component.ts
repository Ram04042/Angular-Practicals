import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent implements OnInit {

  public fname:string = "Ram"
  Submit(contactForm)
  {
    console.log(contactForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
