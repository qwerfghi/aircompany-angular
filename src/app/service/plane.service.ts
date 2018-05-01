import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Plane} from "../model/Plane";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlaneService {

  private PlanesUrl = 'http://localhost:8080/aircompany/planes';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getPlanes(): Observable<Plane[]> {
    return this.http.get<Plane[]>(this.PlanesUrl)
      .pipe(
        catchError(this.handleError('getPlanes', []))
      );
  }

  getPlane(id: number): Observable<Plane> {
    const url = `${this.PlanesUrl}/${id}`;
    return this.http.get<Plane>(url).pipe(
      catchError(this.handleError<Plane>(`getPlane id=${id}`))
    );
  }

  //////// Save methods //////////

  addPlane(plane: Plane): Observable<Plane> {
    return this.http.post<Plane>(this.PlanesUrl, plane, httpOptions).pipe(
      catchError(this.handleError<Plane>('addPlane'))
    );
  }

  deletePlane(id: number): Observable<Plane> {
    const url = `${this.PlanesUrl}/${id}`;

    return this.http.delete<Plane>(url, httpOptions).pipe(
      catchError(this.handleError<Plane>('deletePlane'))
    );
  }

  updatePlane(plane: Plane): Observable<Plane> {
    return this.http.put(`${this.PlanesUrl}/${plane.planeId}`, plane, httpOptions).pipe(
      catchError(this.handleError<any>('updatePlane'))
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
