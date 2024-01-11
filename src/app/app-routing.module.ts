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
import {LoggedInHomeComponent} from "./logged-in-home/logged-in-home.component";
import {DecksListComponent} from "./decks-list/decks-list.component";
import {AddCardComponent} from "./add-card/add-card.component";
import {AddDeckComponent} from "./add-deck/add-deck.component";
import {CardReviewComponent} from "./card-review/card-review.component";
import {DeckReviewComponent} from "./deck-review/deck-review.component";

const routes: Routes = [
  {path:'', redirectTo :'/home', pathMatch:'full'},
  {path: 'menu-nav-bar', component:MenuNavBarComponent},
  {path: 'search', component: SearchComponent},
  {path: 'add', component: AddComponent},
  {path:'decks',component:DecksListComponent},
  {path:'decks/new',component:AddDeckComponent},
  {path: 'decks/:id', component: DeckComponent},
  {path:'decks/review/:id',component:DeckReviewComponent},
  {path:'cards/new',component:AddCardComponent},
  {path:'cards/review',component:CardReviewComponent},
  {path: 'account', component: AccountComponent},
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'reset-password', component: ResetPasswordComponent},
  {path:'welcome',component:LoggedInHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Add { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
