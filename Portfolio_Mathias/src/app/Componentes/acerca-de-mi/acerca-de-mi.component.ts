import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  
  acerca:any

constructor(private datos:DatosService){}

ngOnInit(): void {

  this.datos.getDatos().subscribe(datas=>{

    this.acerca=datas.acerca
  }
  ) 
}
}