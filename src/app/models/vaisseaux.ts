export class Vaisseau {
  id: number;
  image : string;
  nom: string;
  type: string;
  lightSpeed: boolean;
  equipage: number;
  nbPassenger: number;
  constructor(id: number = null ,image: string = null , nom: string = null , type: string = null , lightSpeed: boolean = null, equipage: number = null , nbPassenger: number = null ) {
    this.id = id;
    this.image = image;
    this.nom = nom;
    this.type = type;
    this.lightSpeed = lightSpeed;
    this.equipage = equipage;
    this.nbPassenger = nbPassenger;
  }
}
