import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PropertyButtonI, PropertyI, PropertySearchI} from '../../../../interfaces/property.interface';
import {PropertiesSearchDialogComponent} from '../../../propeties/property-detials/properties-search-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public selectedPropertyType: string;
  constructor(public dialog: MatDialog) { }
  public propertyTypeButtons: PropertyButtonI[];
  public adTypeButtons: PropertyButtonI[];
  public propertiesForSale: PropertyI[];
  public propertiesForRent: PropertyI[];

  ngOnInit(): void {
    this.propertyTypeButtons = [
      { description: 'Search for apartment', icon: 'building.svg', title: 'Apartment'},
      { description: 'Search for villa', icon: 'villa.svg', title: 'Villa', additional: '10 new'},
      { description: 'Search for duplex', icon: 'duplex.svg', title: 'Duplex'}
    ]
    this.adTypeButtons = [
      { description: 'Search for sale property', icon: 'sale.svg', title: 'For Sale'},
      { description: 'Search for rent property', icon: 'rent.svg', title: 'For Rent'},

    ]
    this.propertiesForSale = [{
      name: 'Property Name',
      contractType: 'sale',
      area: 150,
      date: 1658274812942,
      type: 'Apartment',
      createdBy: 'Mohammad Ali',
      liked: true,
      location: 'Jeddah',
      negotiable: true,
      phoneNumber: 9555,
      photoURLS:[],
      rooms: 4,
      price: 100000
    },
      {
        name: 'Property Name',
        contractType: 'sale',
        area: 150,
        date: 1658274812942,
        type: 'Apartment',
        createdBy: 'Mohammad Ali',
        location: 'Jeddah',
        phoneNumber: 9555,
        photoURLS:[],
        rooms: 4,
        price: 1000000
      }]
    this.propertiesForRent = [{
      name: 'Property Name',
      contractType: 'rent',
      area: 150,
      date: 1658274812942,
      type: 'Apartment',
      createdBy: 'Mohammad Ali',
      liked: true,
      location: 'Jeddah',
      negotiable: true,
      phoneNumber: 9555,
      photoURLS:[],
      rooms: 4,
      price: 100000
    },
      {
        name: 'Property Name',
        contractType: 'rent',
        area: 150,
        date: 1658274812942,
        type: 'Apartment',
        createdBy: 'Mohammad Ali',
        location: 'Jeddah',
        phoneNumber: 9555,
        photoURLS:[],
        rooms: 4,
        price: 1000000
      }]

  }

  selectPropertyType(type: string) {
    this.selectedPropertyType = type;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PropertiesSearchDialogComponent, {
      width: '250px',
      data: {propertyType: this.selectedPropertyType},
    });

    dialogRef.afterClosed().subscribe((result: PropertySearchI) => {
      console.log('The dialog was closed');
      this.selectedPropertyType = result.propertyType;
    });
  }
}
