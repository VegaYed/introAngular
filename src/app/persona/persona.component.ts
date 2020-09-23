import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../dto/persona';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  persona : Persona = new Persona();

  constructor(private perService: PersonaService) { }
  ngOnInit(): void {
  }

  guardarPersona(){
    this.perService.guardar(this.persona).subscribe(
      (resp) => {
        alert('Guardado')
      }, (error) =>{
        console.log(error);
      }
    );
  }



}
