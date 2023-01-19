import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.CorrectLogin()){
      return true;
    } else {
      alert("Para entrar a esta sección debes iniciar sesión primero");
      return false;
    }

  }

  

  CorrectLogin(){
    

    return false; //probando
  }
}
