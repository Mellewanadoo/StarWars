import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  developpeuse = 'Camille De Sousa Mathieu';
  planets: Planet[];
  date = new Date();
  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planets = this.planetService.getAllPlanets();
  }
  getAllPlanets(): Planet[] {
    return this.planets;
  }
  getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet =>  planet.id === id )[0];
  }
  deletePlanete(planete: Planet) {
    this.planets = this.planetService.deletePlanete(planete);
  }

}


