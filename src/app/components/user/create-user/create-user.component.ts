import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Input() user: User;

  constructor(public dialogRef: MatDialogRef<CreateUserComponent>) {
  }

  ngOnInit() {
    this.user = new User();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
