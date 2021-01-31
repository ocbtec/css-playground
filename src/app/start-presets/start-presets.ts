export class RandomColorPreset {
  cubeColor: string;
  backgroundColor: string;
  borderColor: string;
  boxShadowColor: string;

  constructor() {
    this.cubeColor = this.randomCubeColor();
    this.backgroundColor = this.randomBackgroundColor();
    this.borderColor = this.randomBorderColor();
    this.boxShadowColor = this.randomBoxShadowColor();
  }

  randomCubeColor() {
    this.cubeColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return this.cubeColor;
  }
  randomBackgroundColor() {
    this.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return this.backgroundColor;
  }
  randomBorderColor() {
    this.borderColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return this.borderColor;
  }
  randomBoxShadowColor() {
    this.boxShadowColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return this.boxShadowColor;
  }

}

export class RandomTransformPreset {
  size: number;
  hPos: number;
  vPos: number;
  rotate: number;

  constructor() {
    this.size = this.randomSize();
    this.hPos = this.randomHPos();
    this.vPos = this.randomVPos();
    this.rotate = this.randomRotate();
  }

  randomSize() {
    this.size = Math.floor(Math.random() * (300 - 10) + 10);
    return this.size;
  }
  randomHPos() {
    this.hPos = Math.floor(Math.random() * (300 - -300) + -300);
    return this.hPos;
  }
  randomVPos() {
    this.vPos = Math.floor(Math.random() * (300 - -300) + -300);
    return this.vPos;
  }
  randomRotate() {
    this.rotate = Math.floor(Math.random() * (360 - 0) + 0);
    return this.rotate;
  }
}

export class RandomBorderPreset {
  width: number;
  radius: number;
  style: string;

  styleArray = [
    'dashed',
    'dotted',
    'double',
    'groove',
    'hidden',
    'inset',
    'none',
    'outset',
    'ridge',
    'solid'
  ];

  constructor() {
    this.width = this.randomWidth();
    this.radius = this.randomRadius();
    this.style = this.randomStyle();
  }

  randomWidth() {
    this.width = Math.floor(Math.random() * (50 - 0) + 0);
    return this.width;
  }
  randomRadius() {
    this.radius = Math.floor(Math.random() * (50 - 0) + 0);
    return this.radius;
  }
  randomStyle() {
    this.style = this.styleArray[Math.round(Math.random() * (9 - 0) + 0)];
    return this.style;
  }
}

export class RandomBoxShadowPreset {
  xOffset: number;
  yOffset: number;
  blur: number;
  spread: number;
  insetSwitch: boolean;

  constructor() {
    this.xOffset = this.randomOffsetX();
    this.yOffset = this.randomOffsetY();
    this.blur = this.randomBlur();
    this.spread = this.randomSpread();
    this.insetSwitch = this.randomInset();
  }

  randomOffsetX() {
    this.xOffset = Math.floor(Math.random() * (300 - -300) + -300);
    return this.xOffset;
  }
  randomOffsetY() {
    this.yOffset = Math.floor(Math.random() * (300 - -300) + -300);
    return this.yOffset;
  }
  randomBlur() {
    this.blur = Math.floor(Math.random() * (150 - 0) + 0);
    return this.blur;
  }
  randomSpread() {
    this.spread = Math.floor(Math.random() * (150 - -100) + -100);
    return this.spread;
  }
  randomInset() {
    this.insetSwitch = Math.round(Math.random() * (1 - 0) + 0) === 1 ? true : false;
    return this.insetSwitch;
  }
}
