import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Migration} from "../../../model/Migration";

@Component({
  selector: 'app-create-migration',
  templateUrl: './create-migration.component.html',
  styleUrls: ['./create-migration.component.css']
})
export class CreateMigrationComponent implements OnInit {

  @Input() migration: Migration;

  constructor(public dialogRef: MatDialogRef<CreateMigrationComponent>) {
  }

  ngOnInit() {
    this.migration = new Migration();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
