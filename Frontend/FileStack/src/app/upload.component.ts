/**
 * Created by johnny on 23/07/2017.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Resource } from '../models/resource';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  files: Resource[] = [];
  selectedFilePaths: string[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log('upload component init')
  }

  onUploadAction() {
    console.log(this.selectedFilePaths);
  }
}
