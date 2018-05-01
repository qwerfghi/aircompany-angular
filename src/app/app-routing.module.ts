import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeesComponent} from './components/employees/employees.component';
import {AddressComponent} from './components/address/address.component';
import {CityComponent} from "./components/city/city.component";
import {CountryComponent} from "./components/country/country.component";
import {MigrationComponent} from "./components/migration/migration.component";
import {PassengerComponent} from "./components/passenger/passenger.component";
import {PersonComponent} from "./components/person/person.component";
import {PlaneComponent} from "./components/plane/plane.component";
import {TicketComponent} from "./components/ticket/ticket.component";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'addresses', component: AddressComponent},
  {path: 'countries', component: CountryComponent},
  {path: 'cities', component: CityComponent},
  {path: 'migrations', component: MigrationComponent},
  {path: 'passengers', component: PassengerComponent},
  {path: 'persons', component: PersonComponent},
  {path: 'planes', component: PlaneComponent},
  {path: 'tickets', component: TicketComponent},
  {path: 'users', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
