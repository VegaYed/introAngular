import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogginObject } from '../dto/logginObject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  logear(loginObject:LogginObject): Observable<any>{
    return this.http.post("https://c299d9925373.ngrok.io/login", loginObject);
  }

}
