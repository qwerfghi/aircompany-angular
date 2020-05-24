import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Passenger} from '../model/Passenger';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PassengerService {

  private PassengersUrl = 'http://localhost:8080/aircompany/passengers';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.PassengersUrl)
      .pipe(
        catchError(this.handleError('getPassengers', []))
      );
  }

  getPassenger(id: number): Observable<Passenger> {
    const url = `${this.PassengersUrl}/${id}`;
    return this.http.get<Passenger>(url).pipe(
      catchError(this.handleError<Passenger>(`getMigration id=${id}`))
    );
  }

  //////// Save methods //////////

  addPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.PassengersUrl, passenger, httpOptions).pipe(
      catchError(this.handleError<Passenger>('addPassenger'))
    );
  }

  deletePassenger(id: number): Observable<Passenger> {
    const url = `${this.PassengersUrl}/${id}`;

    return this.http.delete<Passenger>(url, httpOptions).pipe(
      catchError(this.handleError<Passenger>('deletePassenger'))
    );
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put(`${this.PassengersUrl}/${passenger.passengerId}`, passenger, httpOptions).pipe(
      catchError(this.handleError<any>('updateMPassenger'))
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
