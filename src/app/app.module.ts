import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EmployeesComponent} from './components/employees/employees.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './service/employee.service';
import {AddressComponent} from './components/address/address.component';
import {AddressService} from './service/address.service';
import {UpdateEmployeeComponent} from './components/employees/update-employee/update-employee.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UpdateAddressComponent} from './components/address/update-address/update-address.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CityComponent} from './components/city/city.component';
import {CityService} from "./service/city.service";
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {UpdateCityComponent} from './components/city/update-city/update-city.component';
import {CreateCityComponent} from './components/city/create-city/create-city.component';
import {CdkTableModule} from "@angular/cdk/table";
import {CreateAddressComponent} from './components/address/create-address/create-address.component';
import {CreateEmployeeComponent} from './components/employees/create-employee/create-employee.component';
import {CountryComponent} from './components/country/country.component';
import {UpdateCountryComponent} from './components/country/update-country/update-country.component';
import {CreateCountryComponent} from './components/country/create-country/create-country.component';
import {MigrationComponent} from './components/migration/migration.component';
import {CreateMigrationComponent} from './components/migration/create-migration/create-migration.component';
import {UpdateMigrationComponent} from './components/migration/update-migration/update-migration.component';
import {PassengerComponent} from './components/passenger/passenger.component';
import {CreatePassengerComponent} from './components/passenger/create-passenger/create-passenger.component';
import {UpdatePassengerComponent} from './components/passenger/update-passenger/update-passenger.component';
import {PersonComponent} from './components/person/person.component';
import {CreatePersonComponent} from './components/person/create-person/create-person.component';
import {UpdatePersonComponent} from './components/person/update-person/update-person.component';
import {PlaneComponent} from './components/plane/plane.component';
import {CreatePlaneComponent} from './components/plane/create-plane/create-plane.component';
import {UpdatePlaneComponent} from './components/plane/update-plane/update-plane.component';
import {TicketComponent} from './components/ticket/ticket.component';
import {CreateTicketComponent} from './components/ticket/create-ticket/create-ticket.component';
import {UpdateTicketComponent} from './components/ticket/update-ticket/update-ticket.component';
import {UserComponent} from './components/user/user.component';
import {CreateUserComponent} from './components/user/create-user/create-user.component';
import {UpdateUserComponent} from './components/user/update-user/update-user.component';
import {MigrationService} from "./service/migration.service";
import {PersonService} from "./service/person.service";
import {CountryService} from "./service/country.service";
import {PassengerService} from "./service/passenger.service";
import {PlaneService} from "./service/plane.service";
import {UserService} from "./service/user.service";
import {TicketService} from "./service/ticket.service";


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddressComponent,
    UpdateEmployeeComponent,
    UpdateAddressComponent,
    CityComponent,
    UpdateCityComponent,
    CreateCityComponent,
    CreateAddressComponent,
    CreateEmployeeComponent,
    CountryComponent,
    UpdateCountryComponent,
    CreateCountryComponent,
    MigrationComponent,
    CreateMigrationComponent,
    UpdateMigrationComponent,
    PassengerComponent,
    CreatePassengerComponent,
    UpdatePassengerComponent,
    PersonComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    PlaneComponent,
    CreatePlaneComponent,
    UpdatePlaneComponent,
    TicketComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  providers: [AddressService, CityService, CountryService, EmployeeService, MigrationService, PassengerService,
    PersonService, PlaneService, TicketService, UserService],
  entryComponents: [UpdateEmployeeComponent, CreateEmployeeComponent, UpdateAddressComponent, CreateAddressComponent,
    UpdateCityComponent, CreateCityComponent, CreateCountryComponent, UpdateCountryComponent, CreateMigrationComponent,
    UpdateMigrationComponent, CreatePassengerComponent, UpdatePassengerComponent, CreatePersonComponent,
    UpdatePersonComponent, CreatePlaneComponent, UpdatePlaneComponent, CreateTicketComponent, UpdateTicketComponent,
    CreateUserComponent, UpdateUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
