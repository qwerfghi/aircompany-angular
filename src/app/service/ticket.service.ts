import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Ticket} from '../model/Ticket';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TicketService {

  private TicketsUrl = 'http://localhost:8080/aircompany/tickets';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.TicketsUrl)
      .pipe(
        catchError(this.handleError('getTickets', []))
      );
  }

  getTicket(id: number): Observable<Ticket> {
    const url = `${this.TicketsUrl}/${id}`;
    return this.http.get<Ticket>(url).pipe(
      catchError(this.handleError<Ticket>(`getTicket id=${id}`))
    );
  }

  //////// Save methods //////////

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.TicketsUrl, ticket, httpOptions).pipe(
      catchError(this.handleError<Ticket>('addTicket'))
    );
  }

  deleteTicket(id: number): Observable<Ticket> {
    const url = `${this.TicketsUrl}/${id}`;

    return this.http.delete<Ticket>(url, httpOptions).pipe(
      catchError(this.handleError<Ticket>('deleteTicket'))
    );
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put(`${this.TicketsUrl}/${ticket.ticketId}`, ticket, httpOptions).pipe(
      catchError(this.handleError<any>('updateTicket'))
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
