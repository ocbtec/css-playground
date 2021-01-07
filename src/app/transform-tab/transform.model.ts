export interface Transform {
  label: string;
  slider: {
    id: string,
    minValue: number,
    maxValue: number,
    step: number,
    startValue: number,
    currentValue: number,
    unit: string
  }
}
