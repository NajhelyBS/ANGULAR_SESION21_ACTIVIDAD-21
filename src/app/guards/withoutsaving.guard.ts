import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class WithoutsavingGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.dataUser()){
        return true;
      }else {
        return confirm("No has guardado tus datos, ¿Quiéres continuar de todos modos?");
      }
  }

  dataUser():boolean{
    return false; ;
  }
  
}
  

