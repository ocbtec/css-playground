import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getSliderValue(sliderEvent: MatSliderChange) {
    console.log(sliderEvent.value);
    return sliderEvent.value;
  }

}
