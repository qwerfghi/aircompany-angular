import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../../model/City";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {

  @Input() city: City;

  constructor(public dialogRef: MatDialogRef<CreateCityComponent>) { }

  ngOnInit() {
    this.city = new City();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
