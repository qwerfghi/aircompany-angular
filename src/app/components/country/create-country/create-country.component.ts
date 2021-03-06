import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../../model/Country';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  @Input() country: Country;

  constructor(public dialogRef: MatDialogRef<CreateCountryComponent>) {
  }

  ngOnInit() {
    this.country = new Country();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
