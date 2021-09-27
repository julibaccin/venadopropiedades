import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private propertiesService: PropertiesService) {}

  showResults = false;
  loading = false;

  recommendeds: any = [];
  recents: any = [];
  option = '';

  async ngOnInit(): Promise<void> {
    this.recommendeds = await this.propertiesService.getRecommendeds();
    this.recents = await this.propertiesService.getRecents();
  }

  handleSearch(type: number) {
    this.propertiesService.addProperties();

    this.loading = true;

    this.showResults = true;

    this.loading = false;

    this.option = type == 1 ? 'Alquilar' : 'Vender';
  }

  handleAddImg() {
    this.propertiesService.addImg(new File(['asd'], 'asd'));
  }
}
