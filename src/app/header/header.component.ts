import { Component, OnInit } from '@angular/core';
import { AppHandlerService } from '../app-handler.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api1handeler : AppHandlerService) { }

  ngOnInit() {

    

  }


}
