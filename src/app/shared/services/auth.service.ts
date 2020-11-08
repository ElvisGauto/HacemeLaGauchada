import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  loginEmployee() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/inicio-empleado';
    localStorage.setItem('returnUrl', returnUrl);
    sessionStorage.setItem('option', 'employee');

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginEmployer() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/inicio-empleador';
    localStorage.setItem('returnUrl', returnUrl);
    sessionStorage.setItem('option', 'employer');

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
