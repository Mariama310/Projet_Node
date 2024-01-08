import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface User {
  id:number,
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public firstName='';
  public lastName='';
  public age:number|null=null;
  public email='';
  public password='';

  constructor(private router: Router,
              private httpClient:HttpClient,
  ) {}

  onSignUpClick(){
    this.httpClient.post<any>('http://localhost:8080/api/users',{firstName:this.firstName,lastName:this.lastName,age:this.age,email:this.email,password:this.password}).subscribe((response) => {
      console.log(response);
      let user=response.valueOf() as User;
      localStorage.setItem('userId',user.id.toString());
      localStorage.setItem('firstname',user.firstName);
      localStorage.setItem('lastname',user.lastName);
      localStorage.setItem('age',user.age.toString());
      localStorage.setItem('email',user.email);
      this.router.navigateByUrl('/welcome');
    });
  }
}
