//Parte 1: Paso 1: Se genera el componente heroes en /angular-tour-of-horoes con el comando ng generate component heroes
/*parte 1: paso 1: y se le coloca el comando en heroes.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 y tambien hero = 'Windstorm'; */
/*Parte 1: Paso 6: se coloca
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
en el heroes.component.ts */
/*Parte 2: Paso 2: Se coloca import { HEROES } from '../mock-heroes';
para importar el nuevo archivos en el heroes.component.ts, despues se borrara. */

//parte 1: paso 2: se coloca hero = 'Windstorm'; en heroes.component.ts
import { Component } from '@angular/core';
//Paso 3: Paso 2: Se coloca import { Hero } from '../hero'; para importar el simbolo hero
import { Hero } from '../hero';
//Parte 4: paso 5: se importa el hero.service
import { HeroService } from '../hero.service';
//Parte 4: paso 21: se agrega mensajes adicionales al servicio de heroe
/*Parte 2: Paso 5: Se coloca
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
Para colocar estilos de css o html que vienen dentro de la carpeta heroes. */
/*Parte 2: Paso 7: Se coloca
selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
para agregar el onselect en el archivo hoeres.component.ts */
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

//Parte 4: paso6: se remplaza el heroe = HEROES por el heroe: Hero[];
  heroe!: Hero[];
//Parte 4: paso7: se agrega un parametro privado heroservice de tipo heroeservice al constructor
constructor(private heroService: HeroService) { }
//Parte 4: paso 9: se llama en el ng0nInit
  ngOnInit() {
    this.getHeroes();
  }
//Parte 4: paso 8: Crea un método para recuperar a los héroes del servicio
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroe = heroes);
  }
}

/*Parte 5: Paso 20: Se quita todo lo que habia sobre el onselect de los heroes y se queda lo ensecial y 
quedaria asi todo:
 export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}*/