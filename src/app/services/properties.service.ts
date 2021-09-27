import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { collection, addDoc, getDocs } from '@firebase/firestore';
import { ref, uploadString, getStorage } from '@firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  cardsMockeadas = [
    {
      title: 'Casa de lujo',
      type: '1',
      description: 'Casa terrible',
      location: 'Laprida 255',
      mainImgUrl: 'https://picsum.photos/500/500',
      urlPhotos: [
        'https://picsum.photos/500/500',
        'https://picsum.photos/500/500',
        'https://picsum.photos/500/500',
      ],
      prize: 150,
      rooms: 2,
      toilets: 1,
      garage: 1,
      acceptPets: true,
    },
  ];

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

  async addProperties() {
    await addDoc(
      collection(this.firestore, 'properties'),
      this.cardsMockeadas[0]
    );
  }

  async addImg(img: File) {
    const filename = 'Valentinatemo.jpg';
    const storageRef = ref(this.storage, '/images/' + filename);
    const imgd = await uploadString(
      storageRef,
      'data:image/vnd.microsoft.icon;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAACXBIWXMAAAsSAAALEgHS3X78AAADZklEQVRIiZVXS0wTURS98+nMlNIWdUeRlgllow5ujC4MNnFjYgSCbBQ/hbjRRGCpRiPGDUt140YNMVFjjAoYjKIhhYif+Am48UMEplCkfEI/JIKa1NyxM7wOnc7MSSZ9895978y9c++ZWyqTyYBViEGpHgCUS56OeXiOG2dZ9kFqceqs1TNMCcWgtB0AwtnLq85PRKc0G5qmMwLPjzpYtjOxEL1vm1AMSgGCxJ9vI0lIgmGYvwLPD7Msez4xL78yJBSDUglBUl3oKXft3AE/43MQGVp3Xg4cDvYXz3HPWYZtX5qXZYWwonJbOPte6gruJnDvzi2Yjc9BfWOT1S0g8Pysw8H2IaH1rAGAMl8pDEWeKeOKqmqYlKN2tgNtyxoA2lpPaeOOC2fsblcIB60aezxuONhQq93X1+6HkhJvwT0kOI5L2PKwOXwk597r9UD76ZN2jlA8HLFq3BI+um4ufOywZTKWYSaRMGHFuLGhDtzuYmUci82AnK1Df/lmy6QURSUte9jWuha6q9euQ8flTu3ealhpmn5jyUMsdJ+vVBmn08vQ/3IAunv7IJlMKXPV0lYI1ew2JaQoiCPhpJkh6V3/iwFIpdKQSCQVUhXtreZeUhT9QZE2MSgZFj9Z6Iia0D6Yjs0oWhrwl8PE91FtzUwIMqtLlFoWSWPv1godk6WszKeEGEOIhDIh4oWEAL8ooIq3GJQiALBHb4SFPvJx2PAQPfCdBqokJdx6YNGvpuMbVA/zJo6+0M1QSAhoilohPewAgIt6o9FPr7Xa+/L1m5IsKlZWVrUxyhtmKgJDHAhK6whdRUWDy0uxEGv00GShIw41teQQkh9gMnlUIei6fTe/p9nfiH6BLIWHj3pzyPTAzOx58lSbzRdWhqG7wejzRBb6f8IeQzIVpEeFhEAlzJE3MlmwFN6+e29KiCJAloheCGiKfgy6nmbErJchYdRE5QP2Nr+X54tID2F87DO2g80AIFs+yQTYwbmLXTdVMtC/w/Gxz10AgMSXCqmPGVBVsAzcLldlanH6BGlu2Ahn28YrAHA837pRSJ2C8IPnuL1qW6iHlc4bm+IuvfTpCVG6nIJwIF/zS8LyfwsxKIWyHiuJpRJiQjgF4VxyYQrXzIGEdi5snP3ilijj3PTHvdF3w9b+TAb+Afl3jDi6Q4zhAAAAAElFTkSuQmCC'
    );
    console.log(imgd.ref.fullPath);
  }
}
