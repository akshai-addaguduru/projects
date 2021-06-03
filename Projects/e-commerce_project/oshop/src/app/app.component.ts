import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {    //injecting AuthService here and Router to route to a specific page
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        // router.navigateByUrl(returnUrl);   // this is right but redirects to the homepage everytime on server reload..below method reloads to the same localstorage item
        if(returnUrl == null) {
          router.navigate(['/']);
      }
      }
    });
  }
}
