import {isEmpty, keys, map, reduce, split} from 'lodash';
import {TextStyle, ViewStyle} from 'react-native';
import {Falsy} from '../../types';
import {globalStyles} from './global';

export type ClassName =
  | {[key: string]: any}
  | ViewStyle
  | TextStyle
  | string
  | Falsy;

export const applyStyles = (...styles: ClassName[]): {[key: string]: any} =>
  styles.reduce<{[key: string]: string | Record<string, number | string>}>(
    (acc, curr: any) => {
      if (typeof curr === 'string') {
        const classNames = split(curr, ' ');
        if (isEmpty(classNames)) {
          return acc;
        }
        if (!isEmpty(classNames)) {
          const values = map(classNames, className => globalStyles[className]);
          return {
            ...acc,
            ...reduce(values, (acm, cur) => ({...acm, ...cur}), {}),
          };
        }
      }
      return {...acc, ...curr};
    },
    {},
  );

export const as = applyStyles;

export const appendPrefix = (
  prefix: string,
  values: {[key: string]: {[key: string]: string | number}},
) => {
  return reduce(
    keys(values),
    (prevValues, key) => {
      let dykey = isEmpty(key) ? `${prefix}` : `${prefix}-${key}`;
      return {
        ...prevValues,
        [dykey]: values[key],
      };
    },
    {},
  );
};
