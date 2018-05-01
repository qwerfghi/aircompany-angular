import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Person} from "../../../model/Person";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  @Input() person: Person;

  constructor(public dialogRef: MatDialogRef<CreatePersonComponent>) {
  }

  ngOnInit() {
    this.person = new Person();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
