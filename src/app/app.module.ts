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
    CreateEmployeeComponent
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
  providers: [EmployeeService, AddressService, CityService],
  entryComponents: [UpdateEmployeeComponent, CreateEmployeeComponent, UpdateAddressComponent, CreateAddressComponent, UpdateCityComponent, CreateCityComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
