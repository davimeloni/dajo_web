import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isLoggedIn = false;

  constructor(private http: Http, private router: Router) {
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/authenticate', user, {headers: headers})
      .map(res => res.json());
  }


  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log(token + ' ' + user);

  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return localStorage.getItem('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = {};
    this.isLoggedIn = false;
    localStorage.clear();
  }

  verifyToken() {
    let headers = new Headers();
    headers.append('x-access-token', localStorage.getItem('id_token'));

    return this.http.get('/verifyToken', {headers: headers})
      .map(res => res);
  }

}
