import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstantsService } from 'src/app/service/api-constants.service';
import { ConstantsService } from 'src/app/service/constants.service';
import { HttpService } from 'src/app/service/http.service';
import { tap } from 'rxjs/operators';
import { PropertyType } from 'src/app/model/property/property.type.model';
import { environment } from './../../../../environments/environment';
import { ReviewProperty } from 'src/app/model/property/review.property';
import { Images } from 'src/app/model/property/property.images';
@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private httpService: HttpService, private apiConstantsService: ApiConstantsService) { }

  getPropertyDetails(propertyType: string): Observable<PropertyType[]> {
    const url = environment.endPointUrl + this.apiConstantsService.GET_APARTMENT_DD_URL + propertyType;
    console.log(url);
    return this.httpService.get(url).pipe(
      tap((response: any[]) => {
        let results: PropertyType[] = [];
        if (response) {
          results = response.map(ele => new PropertyType(ele.name, ele.type, ele.constant, ele.orderPosition));
        }
        return results;
      })
    );
  }

  createProperty(reviewPropery: ReviewProperty){
    const url = environment.endPointUrl + this.apiConstantsService.CREATE_APARTMENT_URL;

    return this.httpService.post(url, reviewPropery).pipe(
      tap((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  uploadPhoto(fileToUpload: File): Observable<Images> {
    const url = environment.endPointUrl + this.apiConstantsService.UPLOAD_PHOTO_URL;
    console.log(url);
    return this.httpService.uploadFile(url, fileToUpload).pipe(
      tap((response: any) => {
        let results: Images;
        if (response) {
          results = new Images(response);
        }
        return results;
      })
    );
  }
}
