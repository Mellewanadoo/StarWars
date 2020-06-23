import { Component, OnInit } from '@angular/core';
import { Vaisseau } from '../../models/vaisseaux';
import {Router} from '@angular/router';
import {VaisseauService} from '../../services/vaisseaux.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

  vaisseau = new Vaisseau();

  constructor(private vaisseauService: VaisseauService, private router: Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  submitVaisseau(): void {
    this.vaisseauService.addVaisseau(this.vaisseau);
    this.router.navigate(['/vaisseaux']);
    this.toastr.success('Vaisseau ajouté', 'Félicitation!');
  }
}
