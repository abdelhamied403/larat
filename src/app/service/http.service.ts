import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers: HttpHeaders;
  private options: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append(
      ConstantsService.CONTENT_TYPE,
      ConstantsService.APPLICATION_JSON
    );
    this.options = { headers: this.headers };
  }

  get(url: string): Observable<any> {
    console.log('GET CALL');
    return this.httpClient.get(url, this.options)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  post(url: string, obj: object): Observable<any> {
    return this.httpClient.post(url, obj, this.options)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  put(url: string, obj: object): Observable<any> {
    return this.httpClient.put(url, obj, this.options)
      .pipe(
        catchError(e => this.handleError(e))
      )
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(url, this.options)
  }


  uploadFile(url: string, file: File): Observable<any> {
    console.log(file)
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient
      .post(url, formData, this.options)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  public handleError(error: Response) {
    console.log(error);
    return throwError(()=>error);
  }
}
