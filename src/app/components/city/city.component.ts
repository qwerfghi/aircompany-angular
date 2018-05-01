import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {City} from "../../model/City";
import {CityService} from "../../service/city.service";
import {UpdateCityComponent} from "./update-city/update-city.component";
import {CreateCityComponent} from "./create-city/create-city.component";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['cityId', 'name', 'countryCode', 'district', 'population'];

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
              private cityService: CityService) {
  }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.dataSource.data = cities);
  }

  deleteCity(): void {
    this.cityService.deleteCity(this.id).subscribe(() => this.getCities());
  }

  addCity(): void {
    let dialogRef = this.dialog.open(CreateCityComponent, {
      width: '280px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.cityService.addCity(result).subscribe(() => this.getCities());
      }
      console.log('The dialog was closed');
    });
  }

  updateCity(city: City) {
    let dialogRef = this.dialog.open(UpdateCityComponent, {
      width: '280px',
      height: '450px',
      data: {
        city: city
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.cityService.updateCity(result).subscribe(() => this.getCities());
      }
      console.log('The dialog was closed');
    });
  }
}
