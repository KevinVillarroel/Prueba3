/*Parte 5: Paso 1: Se crea el archivo app-routing.module.ts en el /src/app usando el comando 
ng generate module app-routing --flat --module=app */
/*Parte 5: Paso 2: Se remplaza por lo siguiente:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
import { NgModule } from '@angular/core';
//Parte 5, Paso 4: Se importa el router module.
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; 
//Parte 5, Paso 12: Se importa el dashboard.component
import { DashboardComponent } from './dashboard/dashboard.component';
//Parte 5: Paso 16: Se importa el hero-detail.component
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
/*Parte 5: Paso 3: Rutas path: una cadena que coincide con la URL en la barra de direcciones del navegador.
component: el componente que el enrutador debe crear al navegar a esta ruta.*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  //Parte 5, Paso 13: Se agrega una ruta al arreglo AppRoutingModule.routes que coincida con una ruta al DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },
  /*Parte 5, Paso 14: Cuando se inicia 
  , la barra de direcciones del navegador apunta a la raíz del sitio web. Eso no coincide con ninguna ruta existente, 
  por lo que el enrutador no navega a ninguna parte. El espacio debajo del <router-outlet> está en blanco.*/
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //Parte 5: Paso 17: Se Agrega una ruta parametrizada al arreglo de rutas que coincida con el patron de ruta de la vista detalle del heroe.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //Parte 5 Paso 14: se importa el forRoot() para proporcionar los proovedores de servicios y las directivas necesarias para el enrutamiento.
  imports: [RouterModule.forRoot(routes)],
  //Parte 5 Paso 15: appRoutingModule exporta el RouterModule para que este disponible en la aplicacion.
  exports: [RouterModule]
})
export class AppRoutingModule { }