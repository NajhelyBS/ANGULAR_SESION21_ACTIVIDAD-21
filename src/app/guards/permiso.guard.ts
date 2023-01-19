import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  if(this.isLog()){
    return true;
  }else {
    return true; 
  }
}

isLog():boolean{
return true; ;
}

}
