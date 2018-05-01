import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Ticket} from "../../../model/Ticket";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor(public dialogRef: MatDialogRef<CreateTicketComponent>) {
  }

  ngOnInit() {
    this.ticket = new Ticket();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
