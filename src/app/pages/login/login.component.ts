import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  public formLogin!: FormGroup;
  submitted = false;
  logeado!:string;
  isLog = "true";
  username:string ="";
  password:string = "";

  constructor(private formBuilder:FormBuilder, private router:Router){}

  user = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);

  matcher = new ErrorStateMatcher();


  validacion() {
   
    //obteniendo datos ingresados
    this.username = (<HTMLInputElement>document.getElementById("user")).value;
    this.password = (<HTMLInputElement>document.getElementById("pass")).value;

    //username = Admin && passwor= 123456
    if(this.username == "Admin" && this.password == "123456"){
      this.isLog = "true";
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      localStorage.setItem('isLog', this.isLog);

      //alert iniciado con éxito
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sesión iniciada con éxito',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/home']);   

    }else {
      localStorage.clear();
      //alert fallo
      Swal.fire({
        icon:'error',
        title:'Username or password is incorrect',
        heightAuto: false
      })
    }
    
  }

  

}





