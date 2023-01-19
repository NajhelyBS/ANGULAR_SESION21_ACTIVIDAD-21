import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;
  show = false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
    })
    
    }
    
onSubmit() {
  
}

user = "Usuario" ;
contraseña = "Contraseña";


validar(username:string, password:string){
  
  if(username==this.user && password==this.contraseña){
    localStorage.setItem('username',this.user);
    localStorage.setItem('password',this.contraseña);
    this.show = false;
    console.log('inicio de sesion exitos')
  }else {
    this.show = true;
  }
}

Redirigir(){
  
}
}
