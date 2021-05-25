import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
// import 'firebase/auth';
// import * as firebase from 'firebase/auth'      // never use this way..throws auth() keyword error

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private auth: AuthService) {        // old method was 'private auth: AngularFireAuth
    
  }

  login() {
    // this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());   //working //old-method
    this.auth.login();    // new method using service..check auth.service.ts
  }

}
