import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from '@firebase/auth';
import { collection, addDoc, doc, setDoc } from '@firebase/firestore';

interface Profile {
  title: String;
  description: String;
  location: String;
  urlImg: String;
  whatsapp: String;
  phone: String;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  getCurrentUser() {
    return getAuth(this.auth.app).currentUser;
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async createOrUpdateProfile(profile: Profile) {
    const uid = this.getCurrentUser()?.uid;
    if (uid) {
      const profileRef = doc(this.firestore, 'profile', uid);
      setDoc(profileRef, profile, { merge: true });
    }
  }
}
