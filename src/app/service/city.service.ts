import { Injectable } from '@angular/core';
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {City} from "../model/City";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CityService {

  private CitiesUrl = 'http://localhost:8080/aircompany/cities';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.CitiesUrl)
      .pipe(
        catchError(this.handleError('getCities', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getCity(id: number): Observable<City> {
    const url = `${this.CitiesUrl}/${id}`;
    return this.http.get<City>(url).pipe(
      catchError(this.handleError<City>(`getCity id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addCity(city: City): Observable<City> {
    return this.http.post<City>(this.CitiesUrl, city, httpOptions).pipe(
      catchError(this.handleError<City>('addCity'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCity(id: number): Observable<City> {
    const url = `${this.CitiesUrl}/${id}`;

    return this.http.delete<City>(url, httpOptions).pipe(
      catchError(this.handleError<City>('deleteCity'))
    );
  }

  /** PUT: update the hero on the server */
  updateCity(city: City): Observable<City> {
    return this.http.put(`${this.CitiesUrl}/${city.cityId}`, city, httpOptions).pipe(
      catchError(this.handleError<any>('updateCity'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
