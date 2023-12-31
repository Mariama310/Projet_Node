import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
const routes: Routes = [

];
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { DeckComponent } from './deck/deck.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

    MenuNavBarComponent,
    SearchComponent,
    AddComponent,
    DeckComponent,
    SignupComponent,
    LoginComponent,
    AccountComponent,
    HomeComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppModule { }

