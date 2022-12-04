import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-acerca-de-mii',
  templateUrl: './modal-acerca-de-mii.component.html',
  styleUrls: ['./modal-acerca-de-mii.component.css']
})
export class ModalAcercaDeMiiComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      texto:['', [Validators.required,]],
   })
  }

  ngOnInit() {}
  get texto(){
    return this.form.get("texto");
   }
  get textoF() {
    return this.texto?.touched && !this.texto?.valid;
  }
  get textoV() {
    return  this.texto?.valid;
  }

 
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
      alert("Todo salio mal ¡No se envio el formuario!")
    }
 
  }


}