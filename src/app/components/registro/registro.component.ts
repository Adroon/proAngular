import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { ValidationErrors, ValidatorFn } from "@angular/forms"

const validarQueSeanIguales: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("laPass")
  const confirmarPassword = control.get("laPassConf")

  return password.value === confirmarPassword.value
    ? null
    : { noSonIguales: true }
}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  user: FormGroup;
  submitted = false;


  nombre: string;
  apellido: string;
  correo: string;
  direccion: string;
  password: string;

  constructor(
    private servicio: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.user = this.fb.group({
      elUsuario: ['',[Validators.required, Validators.minLength(3)]],
      elApellido: ['',[Validators.required, Validators.minLength(3)]],
      elCorreo: ['',[Validators.required, Validators.email]],
      laDireccion: ['',[Validators.required, Validators.minLength(3)]],
      laPass: ['',[Validators.required, Validators.minLength(3)]],
      laPassConf: ['',[Validators.required, Validators.minLength(3)]]
    },
    {
      validators: validarQueSeanIguales
    });

  }
  checarSiSonIguales():  boolean  {
    return  this.user.hasError('noSonIguales')  &&
      this.user.get('laPass').dirty &&
      this.user.get('laPassConf').dirty;
  }
 
  get f() { return this.user.controls; }


crearUsuario(){
  // console.log(this.nombre);
  // console.log(this.apellido);
  // console.log(this.direccion);
  // console.log(this.correo);
  // console.log(this.password);

  let user:User = new User();
  user.nombre = this.nombre;
  user.apellido = this.apellido;
  user.direccion = this.direccion;
  user.correo = this.correo;
  user.password = this.password;
  


  this.servicio.crearUsuario(user).subscribe(
    data=>{
      this.router.navigateByUrl("/login");
    },
    error =>{
      alert("Ocurrio un error");
      console.log("Error",error);
    }
  );

}

onSubmit() {
  this.submitted = true;
  if (this.user.invalid) {
      return;
  }
  else{
    this.crearUsuario();
    alert('Registrado!!!')
  }
}
}
