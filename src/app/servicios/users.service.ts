import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getUsers() : Observable<any>{
    /*Aqui va la URL*/
      return this.httpClient.get('https://reqres.in/api/users?page=2') as Observable<any>;
  }
}
