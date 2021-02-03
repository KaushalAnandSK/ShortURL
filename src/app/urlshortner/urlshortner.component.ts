import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urlshortner',
  templateUrl: './urlshortner.component.html',
  styleUrls: ['./urlshortner.component.css']
})
export class UrlshortnerComponent implements OnInit {
  allowAuthentication:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onAuthentication(){
    if(this.allowAuthentication === false)
    this.allowAuthentication=true;
    else
    this.allowAuthentication=false;
  }
}
