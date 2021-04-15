import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {ActivatedRoute, Router} from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {
  planet: Planet;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.planetService.getOnePlanetById(id).subscribe(planet => {
      this.planet = planet;
    });
  }

  editPlanet(planet: Planet) {
    this.planet = planet;
    this.planetService.edit(this.planet).subscribe(() => {
      this.router.navigate( ['/planets']);
    });
    this.toastr.success('Planète modifié', 'Félicitation!');
  }

}
