import {Dimensions} from 'react-native';

/**
 * Scale width/height/any box model value from the Figma mockups
 * to the mobile app. Using the measurments directly from Figma
 * won't translate accurately. Hence the need for scale.
 *
 * Use an arbitrary scale factor. A key advantage with this, is that
 * we have a single location to scale widths/heights should the need arise.
 */

export const Height = Dimensions.get('window').height;
export const Width = Dimensions.get('window').width;

export const scaleWidth = (
  width: number,
  scaleFactor: number = 0.9,
): number => {
  return scaleFactor * width;
};

export const scaleHeight = (
  height: number,
  scaleFactor: number = 0.9,
): number => {
  return scaleFactor * height;
};
export const flattenObject = (
    object: {[key: string]: any},
    prefix = '',
    seperator = '-',
  ) => {
    let result: {[key: string]: string} = {};
    Object.keys(object).forEach(name => {
      const key = `${prefix}${prefix ? seperator : ''}${name}`;
      let value = object[name];
      if (typeof value === 'string') {
        result[key] = value;
      } else if (typeof value === 'object') {
        result = {
          ...result,
          ...flattenObject(value, key),
        };
      }
    });
    return result;
  };
