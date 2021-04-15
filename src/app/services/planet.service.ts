import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(private http: HttpClient ) {
    this.planets = [];
  }
    planets = [];
  apiURL = 'http://localhost:3000/api/planets';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getPlanets(): Observable<Planet[]> {
      return this.http.get<Planet[]>(this.apiURL)
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }
  getOnePlanetById(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiURL}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiURL , planet, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deletePlanete(planet: Planet): Observable<Planet> {
    return this.http.delete<Planet>(`${this.apiURL}/${planet.id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  edit(planet: Planet): Observable<Planet> {
    return this.http.patch<Planet>(this.apiURL , planet.id, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error) {
    let errorMessage: string;
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
