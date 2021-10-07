import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  property: any;
  profile: any;
  environment = environment;
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private properties: PropertiesService
  ) {}
  ngOnInit(): void {
    const state: any = this.location.getState();

    if (!state?.id) {
      this.activatedRoute.params.subscribe(async (o) => {
        this.property = await this.properties.getProperty(o.id);
      });
    } else {
      this.property = state;
    }

    //Obtengo los datos de la empresa
    this.profile = {
      title: 'Particular',
      whatsapp: '3462302916',
      phone: '3462302916',
      location: 'Laprida 255',
    };
  }
}
