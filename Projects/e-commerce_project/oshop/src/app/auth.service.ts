import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;      //subscribe to this service from user$
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';   //before sending user to google..storing returnUrl to localstorage
    localStorage.setItem('returnUrl', returnUrl);

    //sending user to google to authenticate
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());   //working
  }

  logout() {
    this.afAuth.signOut();
    // localStorage.clear();
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
    .pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid).valueChanges(); 
      return Observable.of(null);
    }))
  }
}
