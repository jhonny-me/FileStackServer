import {Component, OnInit} from '@angular/core';
import { Resource } from '../models/resource';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  files: Resource[] = [];
  pageNumber = 0;
  totalPage = 0;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.getFiles()
  }

  getFiles() {
    this.resourceService.getFiles()
      .subscribe((data) => {
        this.files = data;
        this.pageNumber = this.resourceService.pageNumber + 1;
        this.totalPage = this.resourceService.totalPage;
      })
  }

  onNextPageAction() {
    if (this.pageNumber >= this.totalPage) { return }
    this.resourceService.getNextPageFiles()
      .subscribe((data) => {
        this.files = data;
        this.pageNumber = this.resourceService.pageNumber + 1;
        this.totalPage = this.resourceService.totalPage;
      })
  }
  onPreviousPageAction() {
    if (this.pageNumber < 2) {return}
    this.resourceService.getPrevisouPageFiles()
      .subscribe((data) => {
        this.files = data;
        this.pageNumber = this.resourceService.pageNumber + 1;
        this.totalPage = this.resourceService.totalPage;
      })
  }

  onDeleteAction(name: string) {
    this.resourceService.deleteFile(name)
      .subscribe( (data) => {
        this.getFiles()
      })
  }
}
