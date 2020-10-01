import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);

  }

  goBack(): void {

    this.location.back();

  }

  save(): void {

    // Creo que este subscribe no hace nada mas que llamar a goback, pero sin pasarle ninguna informacion, por que los parentesis estan vacios.
    // Creo que el primer parametro de subscribe es simplemente para tener una referencia al return de la funcion a la que le estamos haciendo
    // el subscribe, y poder decir que hacemos con ese return.
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());

  }

}
