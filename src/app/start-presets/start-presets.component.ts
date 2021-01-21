import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { StartPresetsService } from '../services/start-presets.service';

@Component({
  selector: 'app-start-presets',
  templateUrl: './start-presets.component.html',
  styleUrls: ['./start-presets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartPresetsComponent {
  @Output() valueChange = new EventEmitter<number>();

  selectedData: {
    value: string;
    viewValue: string;
  } = {
    value: '',
    viewValue: ''
  };

  presets: StartPresetsService;

  constructor(private startPresetsService: StartPresetsService) {
    this.presets = this.startPresetsService;
  }

  selectedValue(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      viewValue: event.source.triggerValue
    };
    this.startPresetsService.setPreset(this.selectedData.viewValue);
  }
}
