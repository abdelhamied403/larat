import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})

export class AddPropertyComponent implements OnInit {
  page: string = "AD_DETAILS"
  constructor() { }

  ngOnInit() {

  }
  selectPage(page: string) {
    this.page = page;
  }
}
