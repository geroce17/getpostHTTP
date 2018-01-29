import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  login;
  bio;
  company;
  constructor(private http: HttpClient){

  }

  ngOnInit() : void {

    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe
    (
     data=> 
     { console.log("User login: " + data.login);
       console.log("Bio: " + data.bio);
       console.log("Company: " + data.company);
       this.login = data.login;
       this.bio = data.bio;
       this.company = data.company;
     },

     (err: HttpErrorResponse) => {
       if(err.error instanceof Error) {
         console.log("Client-side error ocurred.");
       }
       else{
         console.log("Server-side error occured.");
       }
     }
    );

    const req =
    this.http.post ('http://jsonplaceholder.typicode.com/posts', {
      title: 'oirom',
      body: 'bar',
      userId: 1
    })
    .subscribe(
      res=> {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}