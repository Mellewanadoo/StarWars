import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  private isLoading: boolean;
  private route: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private planetService: PlanetService) { }

  ngOnInit() {
    this.isLoading = true;
    this.planetService.getOnePlanetById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Planet) => {
       this.planet = data;
       this.isLoading = false;
    });
  }
}
