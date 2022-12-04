import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-formacion',
  templateUrl: './modal-formacion.component.html',
  styleUrls: ['./modal-formacion.component.css']
})
export class ModalFormacionComponent implements OnInit {

  form: FormGroup;
  forma:FormGroup
  

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder,private formp:FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      texto:['', [Validators.required,]],
      texto1:['', [Validators.required,]],
      texto3:['', [Validators.required,]],
      texto7:['', [Validators.required,]],
    })
      this.forma=this.formp.group({
        texto4:['', [Validators.required,]],
        texto5:['', [Validators.required,]],
       texto6:['', [Validators.required,]],
       texto8:['', [Validators.required,]],
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

  get texto1(){
    return this.form.get("texto1");
   }
  get textoF1() {
    return this.texto1?.touched && !this.texto1?.valid;
  }
  get textoV1() {
    return  this.texto1?.valid;
  }
  get texto3(){
    return this.form.get("texto3");
   }
  get textoF3() {
    return this.texto3?.touched && !this.texto3?.valid;
  }
  get textoV3() {
    return  this.texto3?.valid;
  }
  get texto4(){
    return this.forma.get("texto4");
   }
  get textoF4() {
    return this.texto4?.touched && !this.texto4?.valid;
  }
  get textoV4() {
    return  this.texto4?.valid;
  }

  get texto5(){
    return this.forma.get("texto5");
   }
  get textoF5() {
    return this.texto5?.touched && !this.texto5?.valid;
  }
  get textoV5() {
    return  this.texto5?.valid;
  }
 
  get texto6(){
    return this.forma.get("texto6");
   }
  get textoF6() {
    return this.texto6?.touched && !this.texto6?.valid;
  }
  get textoV6() {
    return  this.texto6?.valid;
  }
  get texto7(){
    return this.form.get("texto7");
   }
  get texto7F() {
    return this.texto7?.touched && !this.texto7?.valid;
  }
  get texto7V() {
    return  this.texto7?.valid;
  }
  get texto8(){
    return this.forma.get("texto8");
   }
  get textoF8() {
    return this.texto8?.touched && !this.texto8?.valid;
  }
  get textoV8() {
    return  this.texto6?.valid;
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
  onEnviarPes(evento: Event){
    evento.preventDefault; 
 
    if (this.forma.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.forma.markAllAsTouched(); 
      alert("Todo salio mal ¡No se envio el formuario!")
    }
}
}