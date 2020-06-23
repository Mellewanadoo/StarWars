import { Component, OnInit } from '@angular/core';
import {VaisseauService} from '../../services/vaisseaux.service';
import {Vaisseau} from '../../models/vaisseaux';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService) { }

  ngOnInit(): void {
    this.vaisseaux = this.vaisseauService.getAllVaisseaux();
  }
  getAllVaisseaux(): Vaisseau[] {
    return this.vaisseaux;
  }
  getOneVaisseauById(id: number): Vaisseau {
    return this.vaisseaux.filter(vaisseau => vaisseau.id === id )[0];
  }
  deleteVaisseau(vaisseau: Vaisseau) {
    this.vaisseaux = this.vaisseauService.deleteVaisseau(vaisseau);
  }
}
