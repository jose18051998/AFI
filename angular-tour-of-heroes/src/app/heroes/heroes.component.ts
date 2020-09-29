import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*Asi se declara una variable inicializada a HEROES, y supongo que angular sabe el tipo, que sera el mismo de HEROES.*/
  heroes: Hero[];
  /*Asi se declara una variable del tipo Hero sin inicializar.*/
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  /*Esto es una funcion declarada. Dentro de los parentesis se declaran los parametros como variables normales. Luego se
   pone el tipo de lo que devuelve la funcion y luego se empieza el codigo de la misma. */
  onSelect(hero: Hero): void {

    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);


  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
