import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  fname:string="user1";
  lname:string="surname";
  email:string="user.name@gmail.com";
  role:string="admin or user";

  constructor() { }

  ngOnInit(): void {
  }

}
