import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
interface User {
  id:number,
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  public email='';
  public password='';
  constructor(private router: Router,
              private httpClient:HttpClient,
              ) {}
  onresetpasswordclick(){
    this.router.navigateByUrl("/reset-password")
  }

  onLoginClick() {
    console.log('email : ',this.email);
    console.log('password : ',this.password);

    const credentials = {
      email: this.email,
      password: this.password
    };

    this.httpClient.get(`http://localhost:8080/api/users/login/${this.email}`,)
      .subscribe((data ) => {
        let user=data.valueOf() as User;
        console.log('data : ',data);
        if(user.password ===this.password ){
          localStorage.setItem('userId',user.id.toString());
          localStorage.setItem('firstname',user.firstName);
          localStorage.setItem('lastname',user.lastName);
          localStorage.setItem('age',user.age.toString());
          localStorage.setItem('email',user.email);

          this.router.navigateByUrl('/welcome');
        }
        else {
          console.log("pas de user à ce nom");
        }
      })








  }
}
