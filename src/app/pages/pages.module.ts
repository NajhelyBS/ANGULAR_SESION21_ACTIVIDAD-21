import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    LoginComponent,
    PostComponent,
    HomeComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [ 
    LoginComponent,
    PostComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
