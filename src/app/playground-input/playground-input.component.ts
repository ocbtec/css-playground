import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-playground-input',
  templateUrl: './playground-input.component.html',
  styleUrls: ['./playground-input.component.scss']
})
export class PlaygroundInputComponent {

  getSliderValue(sliderEvent: MatSliderChange) {
    console.log(sliderEvent.value);
    return sliderEvent.value;
  }
}
