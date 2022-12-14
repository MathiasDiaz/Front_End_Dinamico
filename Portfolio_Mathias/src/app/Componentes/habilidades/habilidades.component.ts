import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habildades:any

  constructor(private datos:DatosService){}
  
  ngOnInit(): void {
  
    this.datos.getDatos().subscribe(data=>{
  
    this.habildades=data.habilidades
    }
    ) 
  }
  }