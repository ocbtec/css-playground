import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getSliderType(sliderEvent: MatSliderChange) {
    console.log(sliderEvent.source._elementRef.nativeElement.id);
  }

}
