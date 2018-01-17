import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManageaccountsService {

  constructor(private http: Http) { }

  getAllAccounts() {
    let headers = new Headers();
    headers.append('x-access-token', localStorage.getItem('id_token'));

    return this.http.get('/account', {headers: headers})
      .map(res => res.json());
  }

}
