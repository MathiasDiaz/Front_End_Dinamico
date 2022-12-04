import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
informacion:any
constructor(private datos:DatosService){}
ngOnInit(): void {
 this.datos.getDatos().subscribe(data=>{
  this.informacion=data.acercademi
 }
  ) 
}
}