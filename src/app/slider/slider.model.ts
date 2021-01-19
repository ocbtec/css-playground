export interface Slider {
  label: string;
  id: string;
  minValue: number;
  maxValue: number;
  step: number;
  currentValue: number;
  unit: string;
}
