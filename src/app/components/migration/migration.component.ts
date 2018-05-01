import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {MigrationService} from "../../service/migration.service";
import {CreateMigrationComponent} from "./create-migration/create-migration.component";
import {Migration} from "../../model/Migration";
import {UpdateMigrationComponent} from "./update-migration/update-migration.component";

@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrls: ['./migration.component.css']
})
export class MigrationComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['migrationId', 'departureId', 'departureDate', 'arrivalId', 'arrivalDate', 'planeId'];

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
              private migrationService: MigrationService) {
  }

  ngOnInit() {
    this.getMigrations();
  }

  getMigrations(): void {
    this.migrationService.getMigrations().subscribe(employees => this.dataSource.data = employees);
  }

  deleteMigration(): void {
    this.migrationService.deleteMigration(this.id).subscribe(() => this.getMigrations());
  }

  addMigration(): void {
    let dialogRef = this.dialog.open(CreateMigrationComponent, {
      width: '250px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.migrationService.addMigration(result).subscribe(() => this.getMigrations());
      }
      console.log('The dialog was closed');
    });
  }

  updateMigration(migration: Migration) {
    let dialogRef = this.dialog.open(UpdateMigrationComponent, {
      width: '250px',
      height: '500px',
      data: {
        migration: migration
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.migrationService.updateMigration(result).subscribe(() => this.getMigrations());
      }
      console.log('The dialog was closed');
    });
  }

}
