import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-update-migration',
  templateUrl: './update-migration.component.html',
  styleUrls: ['./update-migration.component.css']
})
export class UpdateMigrationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateMigrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
