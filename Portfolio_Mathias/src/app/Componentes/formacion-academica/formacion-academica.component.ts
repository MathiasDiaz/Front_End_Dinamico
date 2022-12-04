import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  formacion:any

  constructor(private datos:DatosService){}
  
  ngOnInit(): void {
  
    this.datos.getDatos().subscribe(data=>{
  
      this.formacion=data.formacion
    }
    ) 
  }
  }