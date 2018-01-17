import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManageitensService {

  constructor(private http: Http) { }

  getAllItens() {
    let headers = new Headers();
    headers.append('x-access-token', localStorage.getItem('id_token'));

    return this.http.get('/item', {headers: headers})
      .map(res => res.json());
  }

  createItem(item) {
    return this.http.post('/item', item)
      .map(res => res.json());
  }

  updateItem(item) {
    return this.http.put('/item/' + item._id, item)
      .map(res => res.json());
  }

  deleteItem(itemId) {
    return this.http.delete('/item/' + itemId)
      .map(res => res.json());
  }

  getAllCategories() {
    return this.http.get('/category')
      .map(res => res.json());
  }

}
