import { Component, OnInit } from '@angular/core';
import {Vaisseau} from '../../models/vaisseaux';
import {ActivatedRoute, Router} from '@angular/router';
import {VaisseauService} from '../../services/vaisseaux.service';

@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {
  vaisseau: Vaisseau;

  constructor(private activatedRoute: ActivatedRoute, private vaisseauxService: VaisseauService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.vaisseau = this.vaisseauxService.getOneVaisseauById(id);
  }
  editVaisseau() {
    this.vaisseauxService.edit(this.vaisseau);
    this.router.navigate( ['/vaisseaux']);
  }
}
