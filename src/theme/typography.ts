import {scale} from 'react-native-size-matters';

const increaseDecrease = 0;

export const fontSizes = {
  '4xs': scale(8) + increaseDecrease,
  '3xs': scale(10) + increaseDecrease,
  '2xs': scale(10) + increaseDecrease,
  xs: scale(12) + increaseDecrease,
  sm: scale(14) + increaseDecrease,
  md: scale(16) + increaseDecrease,
  lg: scale(18) + increaseDecrease,
  xl: scale(20) + increaseDecrease,
  '2xl': scale(24) + increaseDecrease,
  '2xxl': scale(26) + increaseDecrease,
  '3xl': scale(30) + increaseDecrease,
  '4xl': scale(36) + increaseDecrease,
  '5xl': scale(48) + increaseDecrease,
  '6xl': scale(60) + increaseDecrease,
  '7xl': scale(72) + increaseDecrease,
  '8xl': scale(96) + increaseDecrease,
  '9xl': scale(128) + increaseDecrease,
};

export const letterSpacings = {
  xs: '-0.05em',
  sm: '-0.025em',
  md: 0,
  lg: '0.025em',
  xl: '0.05em',
  '2xl': '0.1em',
};

export const lineHeights = {
  '2xs': '1em',
  xs: '1.125em',
  sm: '1.25em',
  md: '1.375em',
  lg: '1.5em',
  xl: '1.75em',
  '2xl': '2em',
  '3xl': '2.5em',
  '4xl': '3em',
  '5xl': '4em',
};

export const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const typography = {
  letterSpacings,
  lineHeights,
  fontWeights,
  fontSizes,
};

export default typography;
