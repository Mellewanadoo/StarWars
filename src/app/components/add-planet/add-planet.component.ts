import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {Router} from '@angular/router';
import {PlanetService} from '../../services/planet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

  planet = new Planet();


  constructor(private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitPlanet(): void {
    this.planetService.addPlanet(this.planet).subscribe(() => {
      this.router.navigate(['/planets']);
    });
    this.toastr.success('Planète ajouté', 'Félicitation!');
  }
}
