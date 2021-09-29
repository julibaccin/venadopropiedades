import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { collection, addDoc, getDocs } from '@firebase/firestore';
import { ref, uploadString, getStorage, uploadBytes } from '@firebase/storage';

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
  constructor(private firestore: Firestore, private storage: Storage) {}

  async getRecommendeds() {
    const recommendeds: any = [];
    const querySnapshot = await getDocs(
      collection(this.firestore, 'properties')
    );
    querySnapshot.forEach((doc) => {
      recommendeds.push(doc.data());
    });
    return recommendeds;
  }

  async getRecents() {
    const recents: any = [];
    const querySnapshot = await getDocs(
      collection(this.firestore, 'properties')
    );
    querySnapshot.forEach((doc) => {
      recents.push(doc.data());
    });
    return recents;
  }

  async addProperty(property: Properties) {
    await addDoc(collection(this.firestore, 'properties'), property);
  }

  async addImg(img: File): Promise<string> {
    const storageRef = ref(this.storage, '/images/' + img.name);
    const imgd = await uploadBytes(storageRef, img);
    return imgd.ref.fullPath;
  }
}
