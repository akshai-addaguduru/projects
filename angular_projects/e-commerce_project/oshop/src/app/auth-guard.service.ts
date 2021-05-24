import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {   //CanActivate() is an in-built firebase method

  constructor(private auth: AuthService, private router: Router) { }    //injecting router for router service here..from non-logged user to login page

  canActivate(route, state : RouterStateSnapshot) {       //returns T/F..here we get auth status of current user....if logged in =  T, good..else navigate to login page
    // this.auth.user$.subscribe(user => {   //we're subscribing here to the observable but there's no way to unsubscribe...so we convert user object to boolean using MAP operator
    return this.auth.user$.pipe(map(user => {
      if (user) return true;

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url} });
      return false;
    }));
  }
}
