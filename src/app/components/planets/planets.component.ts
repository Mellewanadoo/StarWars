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
  isLoading: boolean;
  constructor(private planetService: PlanetService) { }
  ngOnInit(): void  {
    this.isLoading = true;
    this.planetService.getPlanets().subscribe((data: Planet[]) => {
    this.planets = data;
    this.isLoading = false;
  });
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


