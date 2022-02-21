import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';
import { environment } from 'src/environments/environment';

enum PropertyType {
  Alquilar = 'Alquilar',
  Comprar = 'Comprar',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  environment = environment;
  showResults = false;
  loading = false;
  recommendeds: any = [];
  recents: any = [];
  filterPropertys: any = [];
  option = '';

  constructor(private propertiesService: PropertiesService) {}

  async ngOnInit(): Promise<void> {
    this.recommendeds = await this.propertiesService.getRecommendeds();
    this.recents = await this.propertiesService.getRecents();
  }

  async handleSearch(type: string) {
    this.loading = true;
    this.option = type;

    const filterPropertys = await this.propertiesService.getPropertysFilter([
      { key: 'garage', value: 5 },
      { key: 'rooms', value: 2 },
    ]);
    this.filterPropertys = filterPropertys;
    this.showResults = true;
    this.loading = false;
  }
}
