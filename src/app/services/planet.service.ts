import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
    getOnePlanet(arg0: number) {
        throw new Error("Method not implemented.");
    }

    planets = [
    new Planet(1, 'alderaan.jpg', 'Alderaan', 'Mondes du Noyau', 'Montagnes', 'Humains', 'Épisode IV'),
    new Planet(2, 'dagobah.jpg', 'Dagobah', 'Bordure extérieure', 'Marais, tourbières et jungles', 'Yoda','Épisode V'),
    new Planet(3, 'tatooine.jpg', 'Tatooine', 'Bordure extérieure', 'Déserts, oasis et hautes terres', 'Jawas et Tuskens ','Épisode IV ')
  ];
  apiURL = 'http://localhost:3000/planets';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient ) {
    this.planets = [];
  }
    getPlanets(): Observable<Planet[]> {
      return this.http.get<Planet[]>(this.apiURL)
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }
   getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet =>  planet.id === id )[0];
  }
  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiURL ,planet, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deletePlanete(planet: Planet): Planet[] {
    this.planets = this.planets.filter(planetToDelete => planet !== planetToDelete);
    return this.planets;
  }
  edit(planet: Planet): Planet[] {
   this.planets.filter( planetToUpdate => planet.id === planetToUpdate.id)[0] = planet;
   return this.planets
  }
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }}
