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
  private limit = 4;
  pageNumber = 0;
  totalPage = 1;

  constructor(private http: HttpClient) {}

  getFiles(): Observable<Resource[]> {
    return this.http.post(`${this.baseUrl}/pagination`, {
      'limit': this.limit,
      'pageNumber': this.pageNumber
    }).map( data => {
      this.totalPage = Math.ceil(data['data']['count']/this.limit);
      return (data['data']['data'] as Object[]).map(Resource.create);
    })
  }

  getNextPageFiles(): Observable<Resource[]> {
    return this.http.post(`${this.baseUrl}/pagination`, {
      'limit': this.limit,
      'pageNumber': this.pageNumber + 1
    }).map( data => {
      this.pageNumber = this.pageNumber + 1;
      this.totalPage = Math.ceil(data['data']['count']/this.limit);
      return (data['data']['data'] as Resource[]).map(Resource.create);
    })
  }

  getPrevisouPageFiles(): Observable<Resource[]> {
    return this.http.post(`${this.baseUrl}/pagination`, {
      'limit': this.limit,
      'pageNumber': this.pageNumber - 1
    }).map( data => {
      this.pageNumber = this.pageNumber - 1;
      this.totalPage = Math.ceil(data['data']['count']/this.limit);
      return (data['data']['data'] as Resource[]).map(Resource.create);
    })
  }

  deleteFile(name: string) {
    const url = `${this.baseUrl}/${name}`;
    return this.http.delete(url)
  }
}
