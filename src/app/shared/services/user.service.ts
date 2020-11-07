import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(user: firebase.User, option: string) {
    this.db.object(`/users/${option}/` + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
}
