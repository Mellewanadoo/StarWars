import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',      component: HomeComponent },
  { path: 'vaisseaux',      component: VaisseauxComponent },
  { path: 'vaisseau/add',      component: AddVaisseauComponent },
  { path: 'planets',      component: PlanetsComponent },
  { path: 'planet/add',      component: AddPlanetComponent},
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'vaisseau/:id', component: VaisseauDetailComponent },
  { path: 'planets/edit/:id', component: EditPlanetComponent },
  { path: 'vaisseau/edit/:id', component: EditVaisseauComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
