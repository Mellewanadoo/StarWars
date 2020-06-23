export class Planet {
  id: number;
  image: string;
  nom: string;
  localisation : string;
  paysage: string;
  especesInteligentes: string;
  premiereApparition: string;
  constructor(id: number = null, image: string = null, nom: string = null, localisation: string = null, paysage: string = null , especesInteligentes: string = null , premiereApparition: string = null) {
    this.id = id;
    this.image = image;
    this.nom = nom;
    this.localisation = localisation;
    this.paysage = paysage;
    this.especesInteligentes = especesInteligentes;
    this.premiereApparition = premiereApparition;
  }
}
