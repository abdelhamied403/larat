import { Component, Input, OnInit } from '@angular/core';
import { PropertyHeader } from 'src/app/model/home/property.module';

@Component({
  selector: 'app-add-property-header',
  templateUrl: './add-property-header.component.html',
  styleUrls: ['./add-property-header.component.scss']
})
export class AddPropertyHeaderComponent implements OnInit {
  
  @Input() headerItemClass: PropertyHeader;
  constructor() { }

  ngOnInit(): void {
    console.table(this.headerItemClass);
  }

}
