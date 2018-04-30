import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeesComponent} from './components/employees/employees.component';
import {AddressComponent} from './components/address/address.component';
import {CityComponent} from "./components/city/city.component";

const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'addresses', component: AddressComponent},
  {path: 'cities', component: CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
