import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../models/planet';
import { Router} from '@angular/router';

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
  constructor(private planetService: PlanetService, private router: Router) { }
  ngOnInit() {
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

  deletePlanete(planet: Planet) {
    this.planetService.deletePlanete(planet).subscribe(() => {
      this.router.navigate( ['/planets']);
    });
  }

}


