import { Injectable } from '@angular/core';
import {User} from '../../login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedIn=false;
  login(user:User): boolean {
    if (user.userName == "tahir" && user.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
