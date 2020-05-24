import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Country} from '../model/Country';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CountryService {

  private CountriesUrl = 'http://localhost:8080/aircompany/countries';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.CountriesUrl)
      .pipe(
        catchError(this.handleError('getCountries', []))
      );
  }

  getCountry(code: string): Observable<Country> {
    const url = `${this.CountriesUrl}/${code}`;
    return this.http.get<Country>(url).pipe(
      catchError(this.handleError<Country>(`getCountry code=${code}`))
    );
  }

  //////// Save methods //////////

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.CountriesUrl, country, httpOptions).pipe(
      catchError(this.handleError<Country>('addCountry'))
    );
  }

  deleteCountry(code: string): Observable<Country> {
    const url = `${this.CountriesUrl}/${code}`;

    return this.http.delete<Country>(url, httpOptions).pipe(
      catchError(this.handleError<Country>('deleteCountry'))
    );
  }

  updateCountry(country: Country): Observable<Country> {
    return this.http.put(`${this.CountriesUrl}/${country.code}`, country, httpOptions).pipe(
      catchError(this.handleError<any>('updateCountry'))
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
