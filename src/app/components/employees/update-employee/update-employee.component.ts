import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateEmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
