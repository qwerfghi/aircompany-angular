import {Component, OnInit, ViewChild} from '@angular/core';
import {CreatePersonComponent} from './create-person/create-person.component';
import {UpdatePersonComponent} from './update-person/update-person.component';
import {Person} from '../../model/Person';
import {PersonService} from '../../service/person.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['personId', 'name', 'lastName', 'sex', 'birthdate', 'passport', 'phone', 'email', 'country', 'addressId'];

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
              private personService: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.dataSource.data = persons);
  }

  deletePerson(): void {
    this.personService.deletePerson(this.id).subscribe(() => this.getPersons());
  }

  addPerson(): void {
    let dialogRef = this.dialog.open(CreatePersonComponent, {
      width: '350px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.personService.addPerson(result).subscribe(() => this.getPersons());
      }
      console.log('The dialog was closed');
    });
  }

  updatePerson(person: Person) {
    let dialogRef = this.dialog.open(UpdatePersonComponent, {
      width: '350px',
      height: '600px',
      data: {
        person: person
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.personService.updatePerson(result).subscribe(() => this.getPersons());
      }
      console.log('The dialog was closed');
    });
  }

}
