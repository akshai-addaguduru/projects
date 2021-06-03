import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    // return this.auth.user$
    //   .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()))
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
}
