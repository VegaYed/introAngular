import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  
  constructor(private authService:LoginService, private router: Router){}

  canActivate(){
    if(!this.authService.isLogged()){
      console.log('No estas logeado');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
   
  
}
