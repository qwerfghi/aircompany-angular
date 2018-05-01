import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../model/Employee';
import {EmployeeService} from '../../service/employee.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";

@Component({
  selector: 'app-personal',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['employeeId', 'position', 'department', 'salary', 'workRecordBookNumber', 'personId'];

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
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.dataSource.data = employees);
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.id).subscribe(() => this.getEmployees());
  }

  addEmployee(): void {
    let dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '250px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.employeeService.addEmployee(result).subscribe(() => this.getEmployees());
      }
      console.log('The dialog was closed');
    });
  }

  updateEmployee(employee: Employee) {
    let dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '250px',
      height: '500px',
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.employeeService.updateEmployee(result).subscribe(() => this.getEmployees());
      }
      console.log('The dialog was closed');
    });
  }
}
