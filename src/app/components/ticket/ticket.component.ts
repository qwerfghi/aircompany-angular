import {Component, OnInit, ViewChild} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {Ticket} from '../../model/Ticket';
import {UpdateTicketComponent} from './update-ticket/update-ticket.component';
import {CreateTicketComponent} from './create-ticket/create-ticket.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['ticketId', 'cost', 'clazz', 'placeNumber', 'passengerId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  id: number;

  constructor(public dialog: MatDialog,
              private ticketService: TicketService) {
  }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => this.dataSource.data = tickets);
  }

  deleteTicket(): void {
    this.ticketService.deleteTicket(this.id).subscribe(() => this.getTickets());
  }

  addTicket(): void {
    let dialogRef = this.dialog.open(CreateTicketComponent, {
      width: '250px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.ticketService.addTicket(result).subscribe(() => this.getTickets());
      }
      console.log('The dialog was closed');
    });
  }

  updateTicket(ticket: Ticket) {
    let dialogRef = this.dialog.open(UpdateTicketComponent, {
      width: '250px',
      height: '500px',
      data: {
        ticket: ticket
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.ticketService.updateTicket(result).subscribe(() => this.getTickets());
      }
      console.log('The dialog was closed');
    });
  }

}
