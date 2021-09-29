import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { collection, addDoc, getDocs } from '@firebase/firestore';
import {
  ref,
  uploadString,
  getStorage,
  uploadBytes,
  getDownloadURL,
} from '@firebase/storage';
import { AuthService } from './auth.service';

interface Properties {
  title: String;
  type: Number;
  description: String;
  location: String;
  mainImgUrl: String;
  urlPhotos: String[];
  prize: Number;
  rooms: Number;
  toilets: Number;
  garage: Number;
  acceptPets: Boolean;
  active: Boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(
    private firestore: Firestore,
    private storage: Storage,
    private auth: AuthService
  ) {}

  async getRecommendeds() {
    const recommendeds: any = [];
    const querySnapshot = await getDocs(
      collection(this.firestore, 'properties')
    );
    querySnapshot.forEach((doc) => {
      recommendeds.push({ ...doc.data(), id: doc.id });
    });
    return recommendeds;
  }

  async getRecents() {
    const recents: any = [];
    const querySnapshot = await getDocs(
      collection(this.firestore, 'properties')
    );
    querySnapshot.forEach((doc) => {
      recents.push({ ...doc.data(), id: doc.id });
    });
    return recents;
  }

  async addProperty(property: Properties) {
    await addDoc(collection(this.firestore, 'properties'), {
      ...property,
      uid: this.auth.getCurrentUser()?.uid,
    });
  }

  async addImg(category: string, imgs: File[]): Promise<any> {
    const paths: string[] = [];
    let uid = this.auth.getCurrentUser()?.uid;

    for (let img of imgs) {
      const storageRef = ref(
        this.storage,
        `/images/${uid}/${category}/${img.name}`
      );
      const imgd = await uploadBytes(storageRef, img);
      const refImage = ref(this.storage, imgd.ref.fullPath);
      console.log(refImage);
      paths.push(await getDownloadURL(refImage));
    }

    return paths;
  }
}
