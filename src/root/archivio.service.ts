import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'any',
})
export class ArchivioService {
  URLGet: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=16c0cb3f';
  URLSet: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/set?key=16c0cb3f';

  constructor() {}

  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URLGet,
      crossDomain: true,
    });
  }

  public setData(nuovoArchivio: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'POST',
      url: this.URLSet,
      crossDomain: true,
      body: nuovoArchivio,
    });
  }
}