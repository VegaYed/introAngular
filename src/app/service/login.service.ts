import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogginObject } from '../dto/logginObject';
import { Session } from '../dto/session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  logear(loginObject:LogginObject): Observable<any>{
    return this.http.post('http://localhost:8000/login', loginObject);
  }

  isLogged():boolean{
    const token = localStorage.getItem('session_token');
    if(token == null){
      return false;
    }else{
      return true;
    }
  }

  setSession(session: Session){
    localStorage.setItem('session_token', session.token);
  }

}
