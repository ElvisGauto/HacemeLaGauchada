import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginWithGoogle(type) {
    if (type === 'employee') {
      this._authService.loginEmployee();
    } else if (type === 'employer') {
      this._authService.loginEmployer();
    }
  }

}
