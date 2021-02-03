import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  content?:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAdminProfile().subscribe(
      data => {this.content=data;},
      err => {this.content=JSON.parse(err.error).message;}
    );
  }
}
