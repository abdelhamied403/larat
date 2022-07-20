import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
 
  public static readonly BLANK = '';
  public static readonly COMMA_SPACE = ', ';
  public static readonly AND_WITH_SPACES = ' AND ';
  public static readonly DASH = '-';
  public static readonly CONTENT_TYPE = 'Content-type';
  public static readonly APPLICATION_JSON = 'application/json';
  public static readonly SLASH = '/';
  public static  Authorization = 'Authorization';
  public static Bearer = 'Bearer ';
  constructor() { }

  public static formatString(str: string, ...args: string[]) {
    return str.replace(/{(\d+)}/g, (match, index) => args[index] || '')
  }
}
