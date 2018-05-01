import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Passenger} from "../../../model/Passenger";

@Component({
  selector: 'app-create-passenger',
  templateUrl: './create-passenger.component.html',
  styleUrls: ['./create-passenger.component.css']
})
export class CreatePassengerComponent implements OnInit {

  @Input() passenger: Passenger;

  constructor(public dialogRef: MatDialogRef<CreatePassengerComponent>) {
  }

  ngOnInit() {
    this.passenger = new Passenger();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
