import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string) : boolean => {
    var retVal = (userid === "Sara" && password === "1234") ? true : false;

    if (retVal) {
        sessionStorage.setItem("utente", userid);
    }

    return retVal;
  }

  loggedUser = () : string | null => (sessionStorage.getItem("utente")) ? sessionStorage.getItem("utente") : "";

  isLogged = (): boolean => (sessionStorage.getItem("utente")) ? true : false;

  clearUser = (): void => sessionStorage.removeItem("utente");

  clearAll = (): void => sessionStorage.clear();

}
