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
  option = '';

  ngOnInit(): void {
    this.recommendeds = this.propertiesService.getRecommendeds();
  }

  handleSearch(type: number) {
    this.loading = true;

    this.showResults = true;

    this.loading = false;

    this.option = type == 1 ? 'Alquilar' : 'Vender';
  }
}
