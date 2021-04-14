import { Injectable } from '@angular/core';
import { Vaisseau} from '../models/vaisseaux';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vaisseaux = [
    new Vaisseau(1, 'faucon.jpg', 'Faucon millenium', 'cargo', true, 4, 6),
    new Vaisseau(2, 'xwing.jpg', 'XWing', 'Chasseur', true, 2, 2)
  ];
  // @ts-ignore
  constructor() { }
  getAllVaisseaux(): Vaisseau[] {
    return this.vaisseaux;
  } getOneVaisseauById(id: number): Vaisseau{
    return this.vaisseaux.filter(vaisseau => vaisseau.id === id )[0];
  }
  addVaisseau(vaisseau: Vaisseau): void{
    this.vaisseaux.push(vaisseau);
  }
  deleteVaisseau(vaisseau: Vaisseau): Vaisseau[] {
    this.vaisseaux = this.vaisseaux.filter(vaisseauToDelete => vaisseau !== vaisseauToDelete);
    return this.vaisseaux;
  }
  edit(vaisseau: Vaisseau): Vaisseau[] {
    this.vaisseaux.filter( vaisseauToUpdate => vaisseau.id === vaisseauToUpdate.id)[0] = vaisseau;
    return this.vaisseaux;
  }
}
