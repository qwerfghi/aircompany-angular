import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../model/Person';
import {MatDialogRef} from '@angular/material/dialog';

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
