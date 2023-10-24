import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Parte 1: Paso 10: se coloca: import { FormsModule } from '@angular/forms'; // <-- NgModel lives here para importar el formsmodule en el app.module.ts
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//Parte 1: Paso 12: se coloca import { HeroesComponent } from './heroes/heroes.component'; para importar el heroes.component en la app.
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
/*Parte 1: Paso 13: Se coloca 
declarations: [
  AppComponent,
  HeroesComponent
],
para la declaracion del heroescomponent */
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
    /*Parte 1: Paso 11: Se coloca
    imports: [
  BrowserModule,
  FormsModule
],
para poder editar el nombre del heroe */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
