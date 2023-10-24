// Importación de módulos y clases necesarios desde Angular
//Parte 3: Paso 4: Se coloca import { Component, OnInit, Input } from '@angular/core'; para importar en input en el hero-datail.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
//parte 5, paso 21: Se agrega las siguientes importaciones
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
// Definición del componente HeroDetailComponent
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  //Parte 3: Paso 5: Se coloca el @Input() hero: Hero; para usar el input hero
  @Input() hero?: Hero; // Decorador @Input para recibir un objeto Hero como entrada

  // Constructor del componente (en este caso, no realiza ninguna acción)
  //Parte 5 Paso 22: Se inyecta los servicios ActivatedRoute, HeroService y Location en el constructor, guardando sus valores en campos privados:
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
//Parte 5 Paso 23: Se agrega el this.gethero de la funcion getHero la cual esta funcion optiene el hero por el id
  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    // TODO: fix the error ceased by ts-ignore
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
//Parte 5: Paso 26: Se agrega la funcion de volver atras:
  goBack(): void {
    this.location.back();
  }
}
