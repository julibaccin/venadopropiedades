import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor() {}

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

  getRecommendeds() {
    return this.cardsMockeadas;
  }

  getRecents() {}
}
