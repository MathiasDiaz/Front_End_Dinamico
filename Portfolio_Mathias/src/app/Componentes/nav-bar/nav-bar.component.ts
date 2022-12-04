import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  rede:any 
  butto:any
  ap:any
  constructor(private datos:DatosService){}
  
  ngOnInit(): void {
  
    this.datos.getDatos().subscribe(data=>{
    this.rede=data.redes

      this.datos.getDatos().subscribe(data=>{
        this.butto=data.button

        this.datos.getDatos().subscribe(data=>{
          this.ap=data.imagenlogo
      })

})
  }) 
    }
  }
