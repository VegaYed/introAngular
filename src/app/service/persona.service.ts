import { Injectable } from '@angular/core';
import { Persona } from '../dto/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  guardar(persona: Persona): Observable<any>{
    return this.httpClient.post('http://localhost:8000/save', persona);
  }

  getAll(): Observable<any>{
    return this.httpClient.get('http://localhost:8000/all');
  }


}
