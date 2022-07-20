import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyHeader } from 'src/app/model/home/property.module';
import * as fromRoot from '../../../../app.reducer';
import * as AddPhotographyActions from "./../../../../share/property.photography.action";
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs';
import { PropertiesService } from '../../service/properties.service';
import { ToastrService } from 'ngx-toastr';
import { Images } from 'src/app/model/property/property.images';

@Component({
  selector: 'app-add-photos',
  templateUrl: './add-photos.component.html',
  styleUrls: ['./add-photos.component.scss']
})
export class AddPhotosComponent implements OnInit, OnDestroy {
  propertyHeader: PropertyHeader;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  imgSrc: string = '';
  isLaratPhoto: boolean = false;
  isUploadPhoto: boolean = false;
  fileList: Images[] = [];
  addPhotoForm: FormGroup;
  date = null;
  time: Date | null = null;
  submitted = false;
  private subscriptions: Subscription[] = [];
  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService,
    private toastr: ToastrService,
    private store: Store<fromRoot.State>) { }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  ngOnInit(): void {
    this.propertyHeader = new PropertyHeader("firstTopDiv", "firstDivEle", "firstTextDiv", "firstTopDiv", "firstDivEle", "firstTextDiv", true, false, false, "secondTopDiv", "secondDivEle", "secondDivText", false, "secondTopDiv", "secondDivEle", "secondDivText");
    this.initializedFrom();
    this.getDatafromStore();
    
  }
  get f() { return this.addPhotoForm.controls; }

  initializedFrom() {
    this.addPhotoForm = this.formBuilder.group({
      numberOfPhotos: ['', Validators.required],
      photoDate: [null, Validators.required],
      photoTime: [null, Validators.required],
      photography: [false],
      duration: ['', Validators.required],
      images: [[]]
    });
  }

  previousPage() {
    this.addPhotoForm.patchValue({ photography: this.isLaratPhoto, images: this.fileList });
    console.log(JSON.stringify(this.addPhotoForm.value));
    this.store.dispatch(new AddPhotographyActions.AddLaratPhotography(this.addPhotoForm.value));
    this.selectedPage.emit('AD_DETAILS');
  }



  onSubmit() {
   
    if (this.isLaratPhoto) {
     // this.addPhotoForm.setValue({ photography: this.isLaratPhoto })
      this.addPhotoForm.patchValue({ photography: this.isLaratPhoto, images: this.fileList });
      console.log(JSON.stringify(this.addPhotoForm.value));

      this.submitted = true;
      if (this.addPhotoForm.invalid) {
        return;
      }
    //  console.table(this.addPhotoForm.value);
      this.store.dispatch(new AddPhotographyActions.AddLaratPhotography(this.addPhotoForm.value));
      this.selectedPage.emit('ADD_PROPERY');
    }

  }

  readURL(event: any) {
    this.imgSrc = '';
    if (event.target.files && event.target.files[0]) {
      this.propertiesService.uploadPhoto(event.target.files[0]).subscribe({
        next: (v) =>{
          this.toastr.success('file upload suceesfully');
          this.isUploadPhoto = !this.isUploadPhoto;
          v.type = "INTERIOR";
          this.fileList = [...this.fileList, v];
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
     
     
    }
  }

  getDatafromStore() {
    this.subscriptions.push(this.store.select('addPhotoGraphy').subscribe(data => {
      const isEmpty = Object.keys(data.addPhoto).length === 0;
      if (!isEmpty){
        this.isLaratPhoto = data.addPhoto.photography;
        this.addPhotoForm.setValue(data.addPhoto)
        this.fileList = data.addPhoto.images;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
