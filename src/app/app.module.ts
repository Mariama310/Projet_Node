import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  IgxButtonDirective,
  IgxButtonGroupComponent,
  IgxCardComponent,
  IgxCarouselComponent, IgxDialogActionsDirective, IgxDialogComponent,
  IgxInputGroupModule, IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxSlideComponent
} from "igniteui-angular";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
const routes: Routes = [

];
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { DeckComponent } from './deck/deck.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgOptimizedImage } from "@angular/common";
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggedInHomeComponent } from './logged-in-home/logged-in-home.component';
import { CardComponent } from './card/card.component';
import { DecksListComponent } from './decks-list/decks-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddDeckComponent } from './add-deck/add-deck.component';
import {MatIconModule} from "@angular/material/icon";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardReviewComponent } from './card-review/card-review.component';
import { DeckReviewComponent } from './deck-review/deck-review.component';

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
    LoggedInHomeComponent,
    CardComponent,
    DecksListComponent,
    AddCardComponent,
    AddDeckComponent,
    NavBarComponent,
    CardReviewComponent,
    DeckReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxButtonDirective,
    IgxButtonGroupComponent,
    IgxCardComponent,
    IgxCarouselComponent,
    IgxSlideComponent,
    IgxListComponent,
    IgxListItemComponent,
    IgxDialogComponent,
    IgxDialogActionsDirective,
    MatDialogModule,
    IgxRippleDirective,
    MatIconModule
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppModule {
}
