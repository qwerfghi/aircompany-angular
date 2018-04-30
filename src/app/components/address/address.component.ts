import {Component, OnInit, ViewChild} from '@angular/core';
import {Address} from '../../model/Address';
import {AddressService} from '../../service/address.service';
import {UpdateAddressComponent} from "./update-address/update-address.component";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {CreateAddressComponent} from "./create-address/create-address.component";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['addressId', 'country', 'state', 'region', 'city', 'district', 'village', 'houseNumber', 'apartmentNumber'];

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
              private addressService: AddressService) {
  }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => this.dataSource.data = addresses);
  }

  deleteAddress(): void {
    this.addressService.deleteAddress(this.id).subscribe(() => this.getAddresses());
  }

  addAddress(): void {
    let dialogRef = this.dialog.open(CreateAddressComponent, {
      width: '400px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.addressService.addAddress(result).subscribe(() => this.getAddresses());
      }
      console.log('The dialog was closed');
    });
  }

  updateAddress(address: Address) {
    let dialogRef = this.dialog.open(UpdateAddressComponent, {
      width: '400px',
      height: '600px',
      data: {
        address: address
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.addressService.updateAddress(result).subscribe(() => this.getAddresses());
      }
      console.log('The dialog was closed');
    });
  }
}
