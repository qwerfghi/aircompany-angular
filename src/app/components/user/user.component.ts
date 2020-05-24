import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';
import {UpdateUserComponent} from './update-user/update-user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['userId', 'username', 'password', 'userRole', 'personId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  id: number;

  constructor(public dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.dataSource.data = users);
  }

  deleteUser(): void {
    this.userService.deleteUser(this.id).subscribe(() => this.getUsers());
  }

  addUser(): void {
    let dialogRef = this.dialog.open(CreateUserComponent, {
      width: '250px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.userService.addUser(result).subscribe(() => this.getUsers());
      }
      console.log('The dialog was closed');
    });
  }

  updateUser(user: User) {
    let dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '250px',
      height: '500px',
      data: {
        user: user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.userService.updateUser(result).subscribe(() => this.getUsers());
      }
      console.log('The dialog was closed');
    });
  }

}
