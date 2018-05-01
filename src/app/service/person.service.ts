import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators";
import {Person} from "../model/Person";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PersonService {

  private PersonsUrl = 'http://localhost:8080/aircompany/persons';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.PersonsUrl)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.PersonsUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  //////// Save methods //////////

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.PersonsUrl, person, httpOptions).pipe(
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  deletePerson(id: number): Observable<Person> {
    const url = `${this.PersonsUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put(`${this.PersonsUrl}/${person.personId}`, person, httpOptions).pipe(
      catchError(this.handleError<any>('updatePerson'))
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
