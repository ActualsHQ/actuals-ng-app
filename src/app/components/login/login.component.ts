import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isemail: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    console.log(event.target.value + ' | ');
    this.isemail = true;
  }

}
