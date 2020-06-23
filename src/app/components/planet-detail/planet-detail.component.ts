import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';

@Component({
  selector: 'app-planet-detail',
  styleUrls: ['./planet-detail.component.css'],
  templateUrl: './planet-detail.component.html'
})
export class PlanetDetailComponent implements OnInit {
  id: number;
  planet: Planet;
  constructor(private route: ActivatedRoute, private planetService: PlanetService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.planet = this.planetService.getOnePlanetById(this.id);
  }

}
