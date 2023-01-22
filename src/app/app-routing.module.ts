import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoGuard } from './guards/permiso.guard';
import { WithoutsavingGuard } from './guards/withoutsaving.guard';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:"", component:LoginComponent}, //pantalla inicial
  {path:"post",component:PostComponent, canActivate:[PermisoGuard]}, //direcciona a post solo con el permiso del login
  {path:"home", component:HomeComponent, canActivate:[PermisoGuard]},//direcciona a home solo con el permiso del login 
  {path:"forms", component:FormularioComponent, canActivate:[PermisoGuard], canDeactivate:[WithoutsavingGuard]}, //da aviso de si desea salir aun si no ha guardado sus datos
  {path:"login", redirectTo:""}, //redirige a la pagina del login
  {path:"**", redirectTo:"404", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
