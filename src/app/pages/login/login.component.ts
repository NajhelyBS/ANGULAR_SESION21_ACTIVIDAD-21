import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

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


}
