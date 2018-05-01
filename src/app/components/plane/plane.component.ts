import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {PlaneService} from "../../service/plane.service";
import {Plane} from "../../model/Plane";
import {CreatePlaneComponent} from "./create-plane/create-plane.component";
import {UpdatePlaneComponent} from "./update-plane/update-plane.component";

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['planeId', 'model', 'businessClassCount', 'economyClassCount'];

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
              private planeService: PlaneService) {
  }

  ngOnInit() {
    this.getPlanes();
  }

  getPlanes(): void {
    this.planeService.getPlanes().subscribe(persons => this.dataSource.data = persons);
  }

  deletePlane(): void {
    this.planeService.deletePlane(this.id).subscribe(() => this.getPlanes());
  }

  addPlane(): void {
    let dialogRef = this.dialog.open(CreatePlaneComponent, {
      width: '250px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.planeService.addPlane(result).subscribe(() => this.getPlanes());
      }
      console.log('The dialog was closed');
    });
  }

  updatePlane(plane: Plane) {
    let dialogRef = this.dialog.open(UpdatePlaneComponent, {
      width: '250px',
      height: '500px',
      data: {
        plane: plane
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.planeService.updatePlane(result).subscribe(() => this.getPlanes());
      }
      console.log('The dialog was closed');
    });
  }

}
