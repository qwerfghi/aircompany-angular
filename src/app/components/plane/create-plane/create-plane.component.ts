import {Component, Input, OnInit} from '@angular/core';
import {Plane} from '../../../model/Plane';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-plane',
  templateUrl: './create-plane.component.html',
  styleUrls: ['./create-plane.component.css']
})
export class CreatePlaneComponent implements OnInit {

  @Input() plane: Plane;

  constructor(public dialogRef: MatDialogRef<CreatePlaneComponent>) {
  }

  ngOnInit() {
    this.plane = new Plane();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
