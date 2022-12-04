import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-registrarse',
  templateUrl: './modal-registrarse.component.html',
  styleUrls: ['./modal-registrarse.component.css']
})
export class ModalRegistrarseComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
      texto:['', [Validators.required,]],
   })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }
 
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get Passwordvalid(){
    return this.Password?.valid;
  }


  get Mail(){
    return this.form.get("email");
   }
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }
  get Mailvalid() {
    return  this.Mail?.valid;


  }
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