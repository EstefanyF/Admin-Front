import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../interfaces/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getUsers(): Observable <any>{
    return this.http.get<any>(`${this.BASE_URL}/user`);
    
  }

  getUser(id): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/user/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/user/create`, user);
  }

  deleteUser(id: string): Observable<User>{
    return this.http.delete<User>(`${this.BASE_URL}/user/delete?userID=${id}`);
  }

  updateUser(id:string, user: User): Observable<User>{
    return this.http.put<User>(`${this.BASE_URL}/user/update?userID=${id}`, user);

  }
  
  login(request: any) {
    return this.http.post(`${this.BASE_URL}/user/login`, request);
  }
}
