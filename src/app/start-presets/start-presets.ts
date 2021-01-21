export class ColorPresetsVanilla {
  cubeColor = '#ff4081';
  backgroundColor = '#ffffff';
  borderColor = '#b6ddfd';
  boxShadowColor = '#343a60';
}
export class ColorPresetsExperimental {
  cubeColor = '#415f9c';
  backgroundColor = '#9d9dff';
  borderColor = '#b6ddfd';
  boxShadowColor = '#d279d0';

}
export class ColorPresetsRandom {
  cubeColor = '';
  backgroundColor = '';
  borderColor = '';
  boxShadowColor = '';

  randomCubeColor() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;
  }
  randomBackgroundColor() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;
  }
  randomBorderColor() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;
  }
  randomBoxShadowColor() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;
  }
}

export class TransformPresetsVanilla {
  size = 100;
  hPos = 0;
  vPos = 0;
  rotate = 0;
}
export class TransformPresetsExperimental {
  size = 300;
  hPos = 0;
  vPos = 0;
  rotate = 45;
}
export class TransformPresetsRandom {
  randomSize() {
    const size = Math.random() * (300 - 10) + 10;
    return Math.floor(size);
  }
  randomHPos() {
    const hPos = Math.random() * (300 - -300) + -300;
    return Math.floor(hPos);
  }
  randomVPos() {
    const vPos = Math.random() * (300 - -300) + -300;
    return Math.floor(vPos);
  }
  randomRotate() {
    const rotate = Math.random() * (360 - 0) + 0;
    return Math.floor(rotate);
  }
}

export class BorderPresetsVanilla {
  width = 4;
  radius = 0;
  style = 'solid';
}
export class BorderPresetsExperimental {
  width = 26;
  radius = 0;
  style = 'dashed';
}
export class BorderPresetsRandom {
  style = [
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

  randomWidth() {
    const offset = Math.random() * (50 - 0) + 0;
    return Math.floor(offset);
  }
  randomRadius() {
    const offset = Math.random() * (50 - 0) + 0;
    return Math.floor(offset);
  }
  randomStyle() {
    const offset = Math.random() * (9 - 0) + 0;
    return this.style[Math.round(offset)];
  }
}

export class BoxShadowPresetsVanilla {
  xOffset = 8;
  yOffset = 8;
  blur = 5;
  spread = 0;
  insetSwitch = false;
}
export class BoxShadowPresetsExperimental {
  xOffset = -167;
  yOffset = 167;
  blur = 0;
  spread = -59;
  insetSwitch = true;
}
export class BoxShadowPresetsRandom {
  randomOffsetX() {
    const offset = Math.random() * (300 - -300) + -300;
    return Math.floor(offset);
  }
  randomOffsetY() {
    const offset = Math.random() * (300 - -300) + -300;
    return Math.floor(offset);
  }
  randomBlur() {
    const offset = Math.random() * (150 - 0) + 0;
    return Math.floor(offset);
  }
  randomSpread() {
    const offset = Math.random() * (150 - -100) + -100;
    return Math.floor(offset);
  }
  randomInset() {
    const offset = Math.random() * (1 - 0) + 0;
    return Math.round(offset) === 1 ? true : false;
  }
}
