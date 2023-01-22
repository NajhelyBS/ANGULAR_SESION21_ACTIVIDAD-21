import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  firstFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  lastFormControl = new FormControl('', [Validators.required]);

  messageFormControl = new FormControl('', [Validators.required]);
}
