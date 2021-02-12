import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {LoginService} from '../../words/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginadd',
  templateUrl: './loginadd.component.html',
  styleUrls: ['./loginadd.component.css']
})
export class LoginaddComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  model: User;

  newRootA = '';
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
      if (this.loginService.login(this.model)) {
        this.router.navigate(['words/add']);
      }

    }
    else {
      alert('kullanıcı adı yada şifre bilgisini boş bırakmayın.');
    }
  }

  rootingToMain() {
    if (this.loginService.isLoggedIn()) {
      this.newRootA = 'words/add';
    } else {
      this.error = 'Login Error';
    }
  }


}
