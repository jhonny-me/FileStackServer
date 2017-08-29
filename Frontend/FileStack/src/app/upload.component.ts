/**
 * Created by johnny on 23/07/2017.
 */
import { Component, OnInit } from '@angular/core';

import { ResourceService } from '../services/resource.service';
import { Resource } from '../models/resource';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  files: File[] = [];
  selectedFilePaths: string[] = [];

  constructor(private service: ResourceService) {}
  ngOnInit() {
    console.log('upload component init')
  }

  onSelectFilesAction(event) {
    const files = event.target.files;
    var fileArray = [];
    Object.keys(files).forEach((key) => {
      if (key === 'length') { return }
      fileArray.push(files[key])
    });
    this.files = fileArray;
    console.log(this.files);
  }

  onUploadAction() {
    this.service.uploadFiles(this.files).subscribe((data) => {
      console.log(data);
      
    })
  }
}
