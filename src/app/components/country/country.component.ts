import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {CountryService} from "../../service/country.service";
import {CreateCountryComponent} from "./create-country/create-country.component";
import {UpdateCountryComponent} from "./update-country/update-country.component";
import {Country} from "../../model/Country";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['code', 'name', 'continent', 'region', 'surfaceArea', 'population', 'localName', 'governmentForm', 'code2'];

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

  code: string;

  constructor(public dialog: MatDialog,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.dataSource.data = countries);
  }

  deleteCountry(): void {
    this.countryService.deleteCountry(this.code).subscribe(() => this.getCountries());
  }

  addCountry(): void {
    let dialogRef = this.dialog.open(CreateCountryComponent, {
      width: '250px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.countryService.addCountry(result).subscribe(() => this.getCountries());
      }
      console.log('The dialog was closed');
    });
  }

  updateCountry(country: Country) {
    let dialogRef = this.dialog.open(UpdateCountryComponent, {
      width: '250px',
      height: '500px',
      data: {
        country: country
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.countryService.updateCountry(result).subscribe(() => this.getCountries());
      }
      console.log('The dialog was closed');
    });
  }

}
