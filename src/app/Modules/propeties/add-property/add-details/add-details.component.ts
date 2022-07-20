import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownBean } from 'src/app/model/dropdown.model';
import { PropertyHeader } from 'src/app/model/home/property.module';
import { Store } from "@ngrx/store";
import * as fromRoot from '../../../../app.reducer';
import * as AddPropertyActions from "./../../../../share/propertyadd.actions"
import { AddPropertyModel } from 'src/app/model/property/add.property.model';
import { Subscription } from 'rxjs';
import { PropertyType } from 'src/app/model/property/property.type.model';
import { PropertiesService } from '../../service/properties.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit, OnDestroy {
  propertyHeader: PropertyHeader;
  propertyLabel = "Property Type";
  properySelectedValue = "";
  dropDownList: Array<DropdownBean>;
  adTypeList: Array<DropdownBean>;
  finishTypeList: Array<DropdownBean>;
  propertyModel: AddPropertyModel;
  addPropertyForm: FormGroup;
  submitted = false;
  private subscriptions: Subscription[] = [];
   propertyTypeList: PropertyType[] = [];
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private store: Store<fromRoot.State>, private propertyService: PropertiesService) { }

  ngOnInit(): void {
    this.initializedDropDowns();
    this.initializedAddDetailsForm();
    this.getDatafromStore();
  }
  // convenience getter for easy access to form fields
  get f() { return this.addPropertyForm.controls; }

  initializedAddDetailsForm() {
    const maxRgex = /^[1-9][0-9]?$|^50$/;
    this.addPropertyForm = this.formBuilder.group({
      propertyType: ['', Validators.required],
      adType: ['', Validators.required],
      numberOfRoom: ['', [Validators.required, Validators.pattern(maxRgex)]],
      numberOfBathroom: ['', [Validators.required, Validators.pattern(maxRgex)]],
      numberOfReception: ['', [Validators.required, Validators.pattern(maxRgex)]],
      floorNumber: ['', [Validators.required, Validators.pattern(maxRgex)]],
      streetWidth: ['', [Validators.required]],
      area: ['', [Validators.required]],
      finishType: ['', Validators.required],
      price: ['', [Validators.required]],
      adTitle: ['', [Validators.required]],
      details: ['', [Validators.required]],
      hasGarage:[''],
      latitude: ['', [Validators.required]],
      longitude: ['', Validators.required],
      city:['', Validators.required],
      region: ['', Validators.required],
      address: ['', Validators.required],
      receptions: ['', Validators.required]
      
    }); 
  } 


  initializedDropDowns() {

    let propertyType = new PropertyType("Please select the Property", "", "",  0);
    this.propertyHeader = new PropertyHeader("firstTopDiv", "firstDivEle", "firstTextDiv", "secondTopDiv", "secondDivEle", "secondDivText", false, false, false, "secondTopDiv", "secondDivEle", "secondDivText", false, "secondTopDiv", "secondDivEle", "secondDivText");
    this.propertyTypeList = [... this.propertyTypeList, propertyType ];
    this.getPropertyType();
    this.adTypeList = new Array<DropdownBean>();
    this.adTypeList.push(new DropdownBean("", "Please select the ad type"), new DropdownBean("BUY", "Buy"), new DropdownBean("SELL", "Sell"))
    this.finishTypeList = new Array<DropdownBean>();
    this.finishTypeList.push(new DropdownBean("", "Please select the finish type"), new DropdownBean("NON_FINISHED", "Non-finished"), new DropdownBean("SEMI_FINISHED", "Semi-finished"), new DropdownBean("FF", "FULLY_FINISHED"));

  }

  getPropertyType() {
    this.subscriptions.push(this.propertyService.getPropertyDetails("PROPERTY_TYPE").subscribe(data => {
      this.propertyTypeList = [... this.propertyTypeList, ...data];
    }));
  }
  onSubmit() {
    this.submitted = true;
    if (this.addPropertyForm.invalid) {
      return;
    }
    this.store.dispatch(new AddPropertyActions.AddProperty(this.addPropertyForm.value));
    this.selectedPage.emit('ADD_PHOTO');
  }

  getDatafromStore() {
    this.subscriptions.push(this.store.select('addProperty').subscribe(data => {
      const isEmpty = Object.keys(data.addDetails).length === 0;
      if (!isEmpty)
        this.addPropertyForm.setValue(data.addDetails)
    }));
  }

  ngOnDestroy (): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
