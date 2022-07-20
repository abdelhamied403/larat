import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiConstantsService {

  constructor(private configService: ConfigService) { } // later on will fetch all url from backend
  private static readonly GET_PROPERTY_DD = "list?type=";
  public readonly GET_APARTMENT_DD_URL = ApiConstantsService.GET_PROPERTY_DD;
  private static readonly SAVE_PROPERTY = "property";
  public readonly CREATE_APARTMENT_URL = ApiConstantsService.SAVE_PROPERTY;
  private static readonly UPLOAD_PHOTO = "photos/upload";
  public readonly UPLOAD_PHOTO_URL = ApiConstantsService.UPLOAD_PHOTO;
  
}
