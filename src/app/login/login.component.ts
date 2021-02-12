import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {LoginService} from '../words/services/login.service';
import {User} from './user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  model: User;

  newRoot = '';
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
        this.router.navigate(['words']);
      }

    } else {
      alert('kullanıcı adı yada şifre bilgisini boş bırakmayın.');
    }
  }

  rootingToMain() {
    if (this.loginService.isLoggedIn()) {
      this.newRoot = 'words';
    } else {
      this.error = 'Login Error';
    }
  }


}
