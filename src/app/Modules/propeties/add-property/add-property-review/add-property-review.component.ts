import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PropertyHeader } from 'src/app/model/home/property.module';
import * as fromRoot from '../../../../app.reducer';
import { Store } from "@ngrx/store";
import { ReviewProperty } from 'src/app/model/property/review.property';
import { MatDialog } from '@angular/material/dialog';
import { SucessModelComponent } from 'src/app/custom-lib/sucess-model/sucess-model.component';
import { AlertDialogData } from 'src/app/model/alert-dialog-data';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';
import * as AddPropertyDetailsActions from "./../../../../share/propertydetails.actions";
import * as AddPhotographyActions from "./../../../../share/property.photography.action";
import * as AddPropertyActions from "./../../../../share/propertyadd.actions"

@Component({
  selector: 'app-add-property-review',
  templateUrl: './add-property-review.component.html',
  styleUrls: ['./add-property-review.component.scss']
})
export class AddPropertyReviewComponent implements OnInit{


  propertyHeader: PropertyHeader;
  reviewPropery: ReviewProperty;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private store: Store<fromRoot.State>,
     private dialog: MatDialog, private propertyService: PropertiesService) { }


  ngOnInit(): void {
    this.reviewPropery = new ReviewProperty();
    this.propertyHeader = new PropertyHeader("firstTopDiv", "firstDivEle", "firstTextDiv", "secondTopDiv", "secondDivEle", "secondDivText", true, true, true, "secondTopDiv", "secondDivEle", "secondDivText", false, "firstTopDiv", "firstDivEle", "firstTextDiv");
    this.getDataFromStore();
  }

  addProperty() {
    this.propertyService.createProperty(this.reviewPropery).subscribe({
      next: (v) => {
        this.buildAlertDialog("add property details sucessfully");
        this.store.dispatch(new AddPropertyDetailsActions.RemoveDetailsProperty());
        this.store.dispatch(new AddPhotographyActions.RemoveLaratPhotography());
        this.store.dispatch(new AddPropertyActions.RemoveProperty());
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')});
  }

  getDataFromStore() {
    this.getAddDetails();
    this.getAddPhotoGraphy();
    this.getAddProperty();
    console.log(JSON.stringify(this.reviewPropery));
  }
  previousPage() {
    this.selectedPage.emit('ADD_PROPERY');
  }

  getAddProperty() {
    this.store.select('addProperty').subscribe(data => {
      this.reviewPropery.propertyType = data.addDetails.propertyType;
      this.reviewPropery.adTitle = data.addDetails.adTitle;
      this.reviewPropery.adType = data.addDetails.adType;
      this.reviewPropery.details = data.addDetails.details;
      this.reviewPropery.price = data.addDetails.price;
      this.reviewPropery.rooms = data.addDetails.numberOfRoom;
      this.reviewPropery.bathroom = data.addDetails.numberOfBathroom;
      this.reviewPropery.floorNumber = data.addDetails.floorNumber;
      this.reviewPropery.finishType = data.addDetails.finishType;
      this.reviewPropery.latitude = data.addDetails.latitude;
      this.reviewPropery.longitude = data.addDetails.longitude;
      this.reviewPropery.city = data.addDetails.city;
      this.reviewPropery.region = data.addDetails.region;
      this.reviewPropery.address = data.addDetails.address;
      this.reviewPropery.receptions = data.addDetails.receptions;
      this.reviewPropery.area = data.addDetails.area;
     
    }).unsubscribe();
  }
  getAddPhotoGraphy() {
    this.store.select('addPhotoGraphy').subscribe(data => {
      console.log(JSON.stringify(data.addPhoto));
      // if (data.addPhoto.images || data.addPhoto.images.length > 0 ){
      //   this.reviewPropery.images = data.addPhoto.images
      // }else {
      this.reviewPropery.numberOfPhotos = data.addPhoto.numberOfPhotos;
      this.reviewPropery.photoDate = data.addPhoto.photoDate;
      this.reviewPropery.photoTime = data.addPhoto.photoTime;
      this.reviewPropery.photography = data.addPhoto.photography;
      this.reviewPropery.duration = data.addPhoto.duration;
    //  }
    }).unsubscribe();
  }

  getAddDetails() {
    this.store.select('addDetailsProperty').subscribe(data => {
      console.log(JSON.stringify(data.addPropertyDetails));
      this.reviewPropery.enableReserve = data.addPropertyDetails.enableReserve;
      this.reviewPropery.downPayment = data.addPropertyDetails.downPayment;
      this.reviewPropery.downPaymentExpiryDate = data.addPropertyDetails.downPaymentExpiryDate;
      this.reviewPropery.negotiable = data.addPropertyDetails.negotiable;
      this.reviewPropery.minimumPrice = data.addPropertyDetails.minimumPrice;

    }).unsubscribe();
  }



  private buildAlertDialog(message: string): any {
    const dialogRef = this.dialog.open(SucessModelComponent, {
      panelClass: 'alert-modal',
      data: new AlertDialogData('Alert', message, 'OK')
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
     
      this.router.navigate(['/properties/properties']);
    });
  }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
}
