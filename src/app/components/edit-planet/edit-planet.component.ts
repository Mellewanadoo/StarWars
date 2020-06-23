import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet'
import {ActivatedRoute, Router} from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';
@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {
  planet: Planet;

  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.planet = this.planetService.getOnePlanetById(id);
  }
  editPlanet() {
    this.planetService.edit(this.planet);
    this.router.navigate( ['/planets'])
  }

}
