import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  //fix for menu close bug
    $('.mobile-menu-tog').on('click', function(e) {
      $('.mobile-menu-toggle').toggleClass("active");
       $('#icon-menu-toggle').toggleClass("icon-x");
       $('.mobile-menu').toggleClass("open");
      e.preventDefault();
    });

  }

}
