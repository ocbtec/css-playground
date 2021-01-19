import { Component, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { BorderSettingsService } from '../services/border-settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { Slider } from './slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() slider: Slider = {
    label: '',
    tabType: '',
    id: '',
    minValue: 0,
    maxValue: 0,
    step: 0,
    currentValue: 0,
    unit: ''
  };

  constructor(
    private transformSettingsService: TransformSettingsService,
    private borderSettingsService: BorderSettingsService,
    private boxShadowSettingsService: BoxShadowSettingsService
  ) { }

  getSliderType(sliderEvent: MatSliderChange) {
    if (sliderEvent.value !== null) {
      this.slider.currentValue = sliderEvent.value;

      if (sliderEvent.source._elementRef.nativeElement.getAttribute('data-tabType') === 'transform') {
        if (sliderEvent.source._elementRef.nativeElement.id === 'size') {
          this.transformSettingsService.setSize(sliderEvent.value);
        } else if (sliderEvent.source._elementRef.nativeElement.id === 'hMovement') {
          this.transformSettingsService.setXPosition(sliderEvent.value);
        } else if (sliderEvent.source._elementRef.nativeElement.id === 'vMovement') {
          this.transformSettingsService.setYPosition(sliderEvent.value);
        } else  if (sliderEvent.source._elementRef.nativeElement.id === 'rotate') {
          this.transformSettingsService.setRotation(sliderEvent.value);
        }
      } else if (sliderEvent.source._elementRef.nativeElement.getAttribute('data-tabType') === 'border') {
        if (sliderEvent.source._elementRef.nativeElement.id === 'width') {
          this.borderSettingsService.setWidth(sliderEvent.value);
        } else if (sliderEvent.source._elementRef.nativeElement.id === 'radius') {
          this.borderSettingsService.setRadius(sliderEvent.value);
        }
      } else if (sliderEvent.source._elementRef.nativeElement.getAttribute('data-tabType') === 'box-shadow') {
        if (sliderEvent.source._elementRef.nativeElement.id === 'offset-x') {
          this.boxShadowSettingsService.setOffsetX(sliderEvent.value);
        } else if (sliderEvent.source._elementRef.nativeElement.id === 'offset-y') {
          this.boxShadowSettingsService.setOffsetY(sliderEvent.value);
        } else if (sliderEvent.source._elementRef.nativeElement.id === 'blur-radius') {
          this.boxShadowSettingsService.setBlurRadius(sliderEvent.value);
        } else if (sliderEvent.source._elementRef.nativeElement.id === 'spread-radius') {
          this.boxShadowSettingsService.setSpreadRadius(sliderEvent.value);
        }
      }
    }
  }
}
