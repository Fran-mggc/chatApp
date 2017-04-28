import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers():Observable<object[]>{
    return this.http.get('https://randomuser.me/api/').map(
      function (res) {
        return res.json().results;
      }
    );
  }
}
