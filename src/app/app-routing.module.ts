import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WordsComponent} from './words/words.component';
import {WordAddRelativeFormsComponent} from './words/word-add-relative-forms/word-add-relative-forms.component';
import {WordDeleteComponent} from './words/word-delete/word-delete.component';
import {LoginComponent} from './login/login.component';

import {LoginaddComponent} from './login/loginadd/loginadd.component';
import {LoginDelComponent} from './login/login-del/login-del.component';
import {LoginGuardAdd} from './login/loginGuardAdd';
import {LoginGuardDel} from './login/loginGuardDel';

const routes: Routes = [
  {path:'words', component : WordsComponent},
  {path: '', redirectTo: 'words', pathMatch:'full'},
  {path:'words/category/english', component : WordsComponent},
  {path:'words/category/spanish', component : WordsComponent},
  {path:'words/category/french', component : WordsComponent},
  {path:'words/add', component : WordAddRelativeFormsComponent, canActivate:[LoginGuardAdd]},
  {path: 'words/remove', component : WordDeleteComponent, canActivate:[LoginGuardDel]},
  {path: 'login', component : LoginComponent},
  {path: 'login/add', component : LoginaddComponent},
  {path: 'login/del', component : LoginDelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
