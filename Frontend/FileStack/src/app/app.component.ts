import {Component, OnInit} from '@angular/core';
import { Resource } from '../models/resource';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  files: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.getFiles()
      .subscribe((data) => {
        console.log(data);
        this.files = data;
        console.log('this.files = ' + this.files[0].name);
      })
  }
}
