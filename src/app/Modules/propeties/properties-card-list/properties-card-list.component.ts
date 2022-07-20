import {Component, Input, OnInit} from '@angular/core';
import {PropertyI} from '../../../interfaces/property.interface';

@Component({
  selector: 'app-properties-card-list',
  templateUrl: './properties-card-list.component.html',
  styleUrls: ['./properties-card-list.component.scss']
})
export class PropertiesCardListComponent implements OnInit {

  @Input() property: PropertyI;
  constructor() { }

  ngOnInit(): void {
  }

}
