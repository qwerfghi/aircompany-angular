import {Component, OnInit, ViewChild} from '@angular/core';
import {PassengerService} from '../../service/passenger.service';
import {CreatePassengerComponent} from './create-passenger/create-passenger.component';
import {Passenger} from '../../model/Passenger';
import {UpdatePassengerComponent} from './update-passenger/update-passenger.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['passengerId', 'name', 'lastName', 'sex', 'birthdate', 'passport', 'phone', 'country', 'addressId'];

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
              private passengerService: PassengerService) {
  }

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers(): void {
    this.passengerService.getPassengers().subscribe(employees => this.dataSource.data = employees);
  }

  deletePassenger(): void {
    this.passengerService.deletePassenger(this.id).subscribe(() => this.getPassengers());
  }

  addPassenger(): void {
    let dialogRef = this.dialog.open(CreatePassengerComponent, {
      width: '350px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.passengerService.addPassenger(result).subscribe(() => this.getPassengers());
      }
      console.log('The dialog was closed');
    });
  }

  updatePassenger(passenger: Passenger) {
    let dialogRef = this.dialog.open(UpdatePassengerComponent, {
      width: '350px',
      height: '500px',
      data: {
        passenger: passenger
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.passengerService.updatePassenger(result).subscribe(() => this.getPassengers());
      }
      console.log('The dialog was closed');
    });
  }

}
