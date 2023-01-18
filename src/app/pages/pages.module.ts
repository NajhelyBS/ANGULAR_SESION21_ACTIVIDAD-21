import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ 
    LoginComponent,
    PostComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
