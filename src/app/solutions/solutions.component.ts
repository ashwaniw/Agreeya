import { Component, OnInit } from '@angular/core';
import { AppHandlerService } from '../app-handler.service';
import { Router } from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  item: any = '';
  dataListing : any = [];

  constructor(private apiHandle: AppHandlerService,
              private route: Router) { }

  ngOnInit() {

    this.apiHandle.getData("posts").subscribe((response) => {
      this.dataListing = response;
      this.apiHandle.pageLinks = true;
      //console.log(this.dataListing);
    })
  }
  selectItem(itemTitle){
    this.item = itemTitle.title;
    }

}
