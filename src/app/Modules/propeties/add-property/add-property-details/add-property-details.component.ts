import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from "@ngrx/store";
import * as fromRoot from '../../../../app.reducer';
import { PropertyHeader } from 'src/app/model/home/property.module';
import * as AddPropertyDetailsActions from "./../../../../share/propertydetails.actions";

@Component({
  selector: 'app-add-property-details',
  templateUrl: './add-property-details.component.html',
  styleUrls: ['./add-property-details.component.scss']
})
export class AddPropertyDetailsComponent implements OnInit, OnDestroy {

  isEnableReserve: boolean =true;
  propertyHeader: PropertyHeader;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  isEnableNegociable: boolean =true;
  addPropertyFormDetails: FormGroup;
  submitted = false;
  private subscriptions: Subscription[] = [];
  dateFormat = 'yyyy-MM-dd HH:mm:ss';

  constructor(private formBuilder: FormBuilder, private store: Store<fromRoot.State>) { }


  ngOnInit(): void {
    this.propertyHeader = new PropertyHeader("firstTopDiv", "firstDivEle", "firstTextDiv", "secondTopDiv", "secondDivEle", "secondDivText", true, true, false, "firstTopDiv", "firstDivEle", "firstTextDiv", false, "secondTopDiv", "secondDivEle", "secondDivText");
    this.initializedFrom();
    this.getDatafromStore();
  }
  enableReserveEvt(): void {
    this.isEnableReserve = !this.isEnableReserve
  }

  enableNegotiable(): void {
    this.isEnableNegociable = !this.isEnableNegociable;
  }
  initializedFrom(): void {
    this.addPropertyFormDetails = this.formBuilder.group({
      enableReserve: [true],
      downPayment: ['', Validators.required],
      downPaymentExpiryDate: [null, Validators.required],
      negotiable: [true],
      minimumPrice: ['', Validators.required],

    });
  }
  get f() { return this.addPropertyFormDetails.controls; }

  previousPage() {
    this.store.dispatch(new AddPropertyDetailsActions.AddDetailsProperty(this.addPropertyFormDetails.value));

    this.selectedPage.emit('ADD_PHOTO');
  }
  onSubmit() {

    this.submitted = true;
    if (this.addPropertyFormDetails.invalid) {
      return;
    }
    console.table(this.addPropertyFormDetails.value);
    this.store.dispatch(new AddPropertyDetailsActions.AddDetailsProperty(this.addPropertyFormDetails.value));
    this.selectedPage.emit('ADD_REVIEW');

  }

  getDatafromStore() {
    this.subscriptions.push(this.store.select('addDetailsProperty').subscribe(data => {
      const isEmpty = Object.keys(data.addPropertyDetails).length === 0;
      //console.log(data);
      if (!isEmpty) {
        //console.log(isEmpty);
       this.addPropertyFormDetails.setValue(data.addPropertyDetails);
      }
    }));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
