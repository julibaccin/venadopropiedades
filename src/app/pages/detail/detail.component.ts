import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  property: any = {};
  profile: any = {};
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const state: any = this.location.getState();

    if (!state?.id) {
      this.activatedRoute.params.subscribe((o) => {
        console.log('PARAMETRO:', o.id);
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
