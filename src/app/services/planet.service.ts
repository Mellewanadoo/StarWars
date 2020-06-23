import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet(1, 'alderaan.jpg', 'Alderaan', 'Mondes du Noyau', 'Montagnes', 'Humains', 'Épisode IV'),
    new Planet(2, 'dagobah.jpg', 'Dagobah', 'Bordure extérieure', 'Marais, tourbières et jungles', 'Yoda','Épisode V'),
    new Planet(3, 'tatooine.jpg', 'Tatooine', 'Bordure extérieure', 'Déserts, oasis et hautes terres', 'Jawas et Tuskens ','Épisode IV ')
  ];
  constructor() { }
  getAllPlanets(): Planet[] {
    return this.planets;
  } getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet =>  planet.id === id )[0];
  }
  addPlanet(planet: Planet): void {
    this.planets.push(planet);
  }
  deletePlanete(planet: Planet): Planet[] {
    this.planets = this.planets.filter(planetToDelete => planet !== planetToDelete);
    return this.planets;
  }
  edit(planet: Planet): Planet[] {
   this.planets.filter( planetToUpdate => planet.id === planetToUpdate.id)[0] = planet;
   return this.planets
  }
  }
