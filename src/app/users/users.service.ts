import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);

  }
}
