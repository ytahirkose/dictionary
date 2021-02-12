import { Component, OnInit } from '@angular/core';
import {LoginService} from '../words/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  isLoggedIn(){
    return this.loginService.isLoggedIn();
  }

  logOut(){
    this.loginService.logOut();
  }

  ngOnInit(): void {
  }

}
