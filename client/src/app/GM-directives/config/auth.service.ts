import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  private token;
  constructor(private router: Router) { }
  getAuthorizationHeader() {
    this.token = Cookies.getJSON('testplus_auth') ?
      Cookies.getJSON('testplus_auth').token :
      localStorage.getItem('token') || '';
    return this.token;
  }
  isLogin() {
    console.log(this.router.routerState.snapshot.url);

    if (this.getAuthorizationHeader() !== '') {
      return true;
    }
    localStorage.setItem('route', this.router.routerState.snapshot.url);
    return false;
  }
}
