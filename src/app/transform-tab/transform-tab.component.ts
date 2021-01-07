import { Component, OnInit } from '@angular/core';
import { Transform } from './transform.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  sliderType: Transform = {
    label: '',
    slider: {
      id: '',
      minValue: 0,
      maxValue: 0,
      step: 0,
      startValue: 0,
      currentValue: 0,
      unit: ''
    }
  }

  items: Transform[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setSizeSlider();
    this.setMoveHorizontallySlider();
    this.setMoveVerticallySlider();
    this.setMoveRotateSlider();
  }

  setSizeSlider() {
    let sizeSlider: Transform = {
      label: 'Size',
      slider: {
        id: 'size',
        minValue: 10,
        maxValue: 300,
        step: 1,
        startValue: 50,
        currentValue: 50,
        unit: 'px'
      }
    }
    this.items.push(sizeSlider);
  }

  setMoveHorizontallySlider() {
    let horizontallySlider: Transform = {
      label: 'Move horizontally',
      slider: {
        id:'hMovement',
        minValue: -300,
        maxValue: 300,
        step: 1,
        startValue: 0,
        currentValue: 0,
        unit: 'px'
      }
    }
    this.items.push(horizontallySlider);
  }

  setMoveVerticallySlider() {
    let verticallySlider: Transform = {
      label: 'Move vertically',
      slider: {
        id: 'vMovement',
        minValue: -300,
        maxValue: 300,
        step: 1,
        startValue: 0,
        currentValue: 0,
        unit: 'px'
      }
    }
    this.items.push(verticallySlider);
  }

  setMoveRotateSlider() {
    let rotateSlider: Transform = {
      label: 'Rotate',
      slider: {
        id:'rotate',
        minValue: 0,
        maxValue: 360,
        step: 1,
        startValue: 0,
        currentValue: 0,
        unit: '°'
      }
    }
    this.items.push(rotateSlider);
  }
}
