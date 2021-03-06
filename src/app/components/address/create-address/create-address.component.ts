import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../model/Address';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  @Input() address: Address;

  constructor(public dialogRef: MatDialogRef<CreateAddressComponent>) { }

  ngOnInit() {
    this.address = new Address();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
