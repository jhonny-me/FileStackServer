/**
 * Created by johnny on 21/07/2017.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Resource } from '../models/resource';


@Injectable()
export class ResourceService {
  private baseUrl = 'http://localhost:3000/api/Containers/container1/files';


  constructor(private http: HttpClient) {}

  getFiles(): Observable<Resource[]> {
    return this.http.get(this.baseUrl)
      .map( data => data as Resource[] )
  }
}
