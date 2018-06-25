import { Component, OnInit } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { ViewChild } from '@angular/core'
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageTitle:string ='Home';
  @ViewChild('owlElement') owlElement: OwlCarousel       

    fun() {
      this.owlElement.next([100])
      //duration 200ms
    }
    object = {          
      link: "http://lorempixel.com/100/100"
    }


}
