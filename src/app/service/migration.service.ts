import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Migration} from '../model/Migration';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MigrationService {

  private MigrationsUrl = 'http://localhost:8080/aircompany/migrations';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getMigrations(): Observable<Migration[]> {
    return this.http.get<Migration[]>(this.MigrationsUrl)
      .pipe(
        catchError(this.handleError('getMigrations', []))
      );
  }

  getMigration(id: number): Observable<Migration> {
    const url = `${this.MigrationsUrl}/${id}`;
    return this.http.get<Migration>(url).pipe(
      catchError(this.handleError<Migration>(`getMigration id=${id}`))
    );
  }

  //////// Save methods //////////

  addMigration(migration: Migration): Observable<Migration> {
    return this.http.post<Migration>(this.MigrationsUrl, migration, httpOptions).pipe(
      catchError(this.handleError<Migration>('addMigration'))
    );
  }

  deleteMigration(id: number): Observable<Migration> {
    const url = `${this.MigrationsUrl}/${id}`;

    return this.http.delete<Migration>(url, httpOptions).pipe(
      catchError(this.handleError<Migration>('deleteMigration'))
    );
  }

  updateMigration(migration: Migration): Observable<Migration> {
    return this.http.put(`${this.MigrationsUrl}/${migration.migrationId}`, migration, httpOptions).pipe(
      catchError(this.handleError<any>('updateMigration'))
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
