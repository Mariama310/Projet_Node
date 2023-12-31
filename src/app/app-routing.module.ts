import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{SearchComponent} from "./search/search.component";
import{AddComponent} from "./add/add.component";
import{ DeckComponent} from "./deck/deck.component";
import{ SignupComponent} from "./signup/signup.component";
import{LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account/account.component";
import{HomeComponent} from "./home/home.component";
import{ MenuNavBarComponent} from "./menu-nav-bar/menu-nav-bar.component";
import{ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [
  {path:'', redirectTo :'/home', pathMatch:'full'},
  {path: 'menu-nav-bar', component:MenuNavBarComponent},
  {path: 'search', component: SearchComponent},
  {path: 'add', component: AddComponent},
  {path: 'deck', component: DeckComponent},
  {path: 'account', component: AccountComponent},
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Add { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
