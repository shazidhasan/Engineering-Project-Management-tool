import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth1Service } from './auth1.service';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthGuardService  implements CanActivate {  
      
  constructor(private loginService:Auth1Service, private router:Router) { }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        return this.loginService.isAuthenticated().map(e => {
            if (e) {
                return true;
            }
        }).catch(() => {
            this.router.navigate(['/signin']);
            return Observable.of(false);
        }); 
    }
}
