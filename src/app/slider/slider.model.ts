export interface Slider {
  label: string;
  slider: {
    id: string,
    minValue: number,
    maxValue: number,
    step: number,
    currentValue: number,
    unit: string
  };
}
