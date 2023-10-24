//Parte 4: paso 1: generar el comando ng generate service hero en el /scr/app.
//Parte 4: paso2: se importa el inyectable
import { Injectable } from '@angular/core';
//Parte 4: paso10 : se importa el observable heroservice.
import { Observable, of } from 'rxjs';
//Parte 4: paso 3: se importa los datos de los heroes
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//Parte 4: paso 15: se importa el message.service
import { MessageService } from './message.service';
/*Parte 4: paso2: se exporta el inyectable y el constructor 
export class HeroService {
  constructor() { }
  }*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {
//Parte 4: paso 16: se modifica el constructor con un parametro que declare una propiedad privada messageService. 
  constructor(private messageService: MessageService) { }
//Parte 4: paso 4:Se agrega el metodo getHeroes para devolver los heroes simulados
/*Parte 4: paso 11: se remplaza el metodo por 
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}*/
//Parte 4: paso 12: el paso 11 es el original pero el que esta puesto es el observable
//Parte 4: Paso 17: Se modifica el metodo getHeroes para enviar un mensaje cuando busquen los heroes.
getHeroes(): Observable<Hero[]> {
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('Servicio de heroes: Heroe Buscados');
  return of(HEROES);
}
//Parte 5: Paso 24:Se agrega el método getHero() con el id después del método getHeroes():
getHero(id: number): Observable<Hero | undefined>  {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`Servicio de heroe: Heroe buscado con el id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}
}