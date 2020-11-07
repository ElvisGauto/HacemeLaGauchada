import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HacemeLaGauchada';

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.saveUser();
  }

  saveUser() {
    this.auth.user$.subscribe(user => {
      if (user) {
        const option = sessionStorage.getItem('option');
        sessionStorage.removeItem('option');
        this.userService.saveUser(user, option);

        const returnUrl = localStorage.getItem('returnUrl');
        localStorage.removeItem('returnUrl');
        if (returnUrl) {
          this._router.navigateByUrl(returnUrl);
        }
      }
    });
  }
}
