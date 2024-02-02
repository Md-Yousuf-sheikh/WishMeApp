import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const breakpoints = [0, 576, 768, 992, 1200];

const responsiveStyle = (styles?: any) => {
  if (!styles) return null;

  if (Array.isArray(styles)) {
    if (WIDTH <= breakpoints[1]) return styles[0];
    if (WIDTH <= breakpoints[2]) return styles[1];
    if (WIDTH <= breakpoints[3]) return styles[2];
    if (WIDTH <= breakpoints[4]) return styles[3];
    return styles[4];
  }

  return styles;
};

export {HEIGHT, WIDTH, responsiveStyle};
