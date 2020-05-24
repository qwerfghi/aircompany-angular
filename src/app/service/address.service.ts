import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Address} from '../model/Address';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AddressService {

  private AddressesUrl = 'http://localhost:8080/aircompany/addresses';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET heroes from the server */
  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.AddressesUrl)
      .pipe(
        catchError(this.handleError('getAddresses', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getAddress(id: number): Observable<Address> {
    const url = `${this.AddressesUrl}/${id}`;
    return this.http.get<Address>(url).pipe(
      catchError(this.handleError<Address>(`getAddress id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.AddressesUrl, address, httpOptions).pipe(
      catchError(this.handleError<Address>('addAddress'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteAddress(id: number): Observable<Address> {
    const url = `${this.AddressesUrl}/${id}`;

    return this.http.delete<Address>(url, httpOptions).pipe(
      catchError(this.handleError<Address>('deleteAddress'))
    );
  }

  /** PUT: update the hero on the server */
  updateAddress(address: Address): Observable<any> {
    return this.http.put(`${this.AddressesUrl}/${address.addressId}`, address, httpOptions).pipe(
      catchError(this.handleError<any>('updateAddress'))
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
