import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
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
  }
}
