import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {LoginService} from '../../words/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-del',
  templateUrl: './login-del.component.html',
  styleUrls: ['./login-del.component.css']
})
export class LoginDelComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  model: User;

  newRootB = '';
  error = '';

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  login() {

    if (this.loginForm.valid) {
      this.model = Object.assign({}, this.loginForm.value);
      if(this.loginService.login(this.model)){
        this.router.navigate(['words/remove']);
      }
    } else {
      alert('kullanıcı adı yada şifre bilgisini boş bırakmayın.');
    }
  }

  rootingToMain() {
    if (this.loginService.isLoggedIn()) {
      this.newRootB = 'words/remove';
    }
    else {
      this.error = 'Login Error';
    }
  }


}
