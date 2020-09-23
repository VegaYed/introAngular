import { Component, OnInit } from '@angular/core';
import { Persona } from '../dto/persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  personas: Persona[];

  constructor() { }

  ngOnInit(): void {
  }

}
