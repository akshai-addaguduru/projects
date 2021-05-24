import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
// import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
// import firebase from 'firebase/app';
// import { Observable } from 'rxjs';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  // user$: Observable<firebase.User>;    // make user an observable      // defined now in auth.service()

  constructor(private auth: AuthService) {
    // afAuth.authState.subscribe(user => this.user = user);    // we've to subscribe to authState of firebase to know about the status of auth
    // we've to always unsubscribe from firebase as the stream of events are async()
    auth.appUser$.subscribe(appUser => this.appUser = appUser)

  }

  logout() {
    this.auth.logout();
  }
}
