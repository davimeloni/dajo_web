import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KitchenService {

  constructor(private  http: Http) {

   }

   getKitchenItens() {
      let headers = new Headers();
      headers.append('x-access-token', localStorage.getItem('id_token'));

     return this.http.get('/accountskitchen', {headers: headers})
      .map(res => res.json());
   }

   updateItensAccount(updateData) {

     return this.http.put('/account/' + updateData.accountId + '/updateitens', updateData)
      .map(res => res.json());
   }

}
