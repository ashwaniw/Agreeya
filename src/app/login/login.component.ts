import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userMail : string = '';
  userPass : string = '';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  submitLoginForm(){        
    if(this.userMail == '' || this.userMail == null || this.userMail == undefined ){
      console.log('Please enter your username');
    } else if(this.userPass == '' || this.userPass == null || this.userPass == undefined ){
      console.log('Please enter your password');
    } else {
      this.route.navigate(['./solutions'])
    }
  }

}
