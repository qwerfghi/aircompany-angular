import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../model/Employee';
import {MatDialogRef} from '@angular/material/dialog';

;

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input() employee: Employee;

  constructor(public dialogRef: MatDialogRef<CreateEmployeeComponent>) { }

  ngOnInit() {
    this.employee = new Employee();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
