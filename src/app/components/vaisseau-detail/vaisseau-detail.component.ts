import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vaisseau} from '../../models/vaisseaux';
import {VaisseauService} from '../../services/vaisseaux.service'

@Component({
  selector: 'app-vaisseau-detail',
  templateUrl: './vaisseau-detail.component.html',
  styleUrls: ['./vaisseau-detail.component.css']
})
export class VaisseauDetailComponent implements OnInit {
  id: number;
  vaisseau: Vaisseau;
  constructor(private route: ActivatedRoute, private vaisseauService: VaisseauService) { }

  ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id');
  this.vaisseau = this.vaisseauService.getOneVaisseauById(this.id);
  }

}
