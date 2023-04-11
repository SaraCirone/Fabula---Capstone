import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

import myAppConfig from 'src/app/config/my-app-config';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


    oktaSignin: any;

    constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {

        this.oktaSignin = new OktaSignIn({

          baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
          clientId: myAppConfig.oidc.clientId,
          redirectUri: myAppConfig.oidc.redirectUri,
          authParams: {
            pkce: true,
            issuer: myAppConfig.oidc.issuer,
            scopes: myAppConfig.oidc.scopes
          }
        });
       }

  ngOnInit(): void {
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget'},
      (response: any) => {
        if (response.status === 'SUCCESS') {
          this.oktaAuth.signInWithRedirect();
        }
      },
      (error: any) => {
        throw error;
      }
    );
  }

}
