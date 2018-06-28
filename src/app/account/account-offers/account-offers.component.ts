import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-offers',
  templateUrl: './account-offers.component.html',
  styleUrls: ['./account-offers.component.css']
})
export class AccountOffersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
