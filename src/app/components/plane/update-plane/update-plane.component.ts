import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-update-plane',
  templateUrl: './update-plane.component.html',
  styleUrls: ['./update-plane.component.css']
})
export class UpdatePlaneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatePlaneComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
