import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  uid = '';

  async getUserId() {
    return this.uid;
  }

  async login(email: string, password: string) {
    const user = await signInWithEmailAndPassword(this.auth, email, password);
    this.uid = user.user.uid;
  }

  async register(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    this.uid = user.user.uid;
  }
}
