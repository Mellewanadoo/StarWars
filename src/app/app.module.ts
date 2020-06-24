import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { InitialesPipe } from './pipes/initiales.pipe';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { EditVaisseauComponent } from './components/edit-vaisseau/edit-vaisseau.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VaisseauxComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    HomeComponent,
    VaisseauDetailComponent,
    AddPlanetComponent,
    AddVaisseauComponent,
    InitialesPipe,
    EditPlanetComponent,
    EditVaisseauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
