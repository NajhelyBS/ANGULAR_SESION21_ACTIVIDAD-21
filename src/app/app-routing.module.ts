import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutsavingGuard } from './guards/withoutsaving.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:"", component:LoginComponent, canDeactivate:[WithoutsavingGuard]},
  {path:"post",component:PostComponent,},
  {path:"home", component:HomeComponent,},
  
  {path:"**", redirectTo:"404", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
