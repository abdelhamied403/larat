import { Component, OnInit } from '@angular/core';
import {PropertyI} from '../../../interfaces/property.interface';

@Component({
  selector: 'app-propeties',
  templateUrl: './propeties.component.html',
  styleUrls: ['./propeties.component.scss']
})
export class PropetiesComponent implements OnInit {

  public propertiesList: PropertyI[];
  constructor() { }

  ngOnInit(): void {
    this.propertiesList = [{
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
  }

}
