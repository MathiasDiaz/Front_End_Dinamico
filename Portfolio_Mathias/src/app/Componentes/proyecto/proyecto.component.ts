import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  Proyectos:any

  constructor(private datos:DatosService){}
  
  ngOnInit(): void {
  
    this.datos.getDatos().subscribe(data=>{
  
      this.Proyectos=data.proyectos
    }
    ) 
  }
  }