import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userId: string = "";
    password: string = "";
    autenticato: boolean = true;
    errMsg: string = "User e/o la password non corrispondono!"



  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

 gestAuth = () : void => {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
        this.route.navigate(['home', this.userId]);
        this.autenticato = true;

    } else {
        this.autenticato = false;

    }
 }

}
