import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  content?:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      data => {this.content=data;},
      err => {this.content=JSON.parse(err.error).message;}
    );
  }
}
