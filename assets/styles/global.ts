import {StyleSheet} from 'react-native';
import {applyFontSize, applySpacing, dimensions, spacing} from './variables';
import {appendPrefix} from './utils';
import Colors from '../style-guide/colors';
import { flattenObject } from '@/utility/scalers';

const flattenedColors = flattenObject(Colors);

export const globalStyles: {[key: string]: any} = StyleSheet.create({
  hidden: {
    display: 'none',
  },
  ...appendPrefix('flex', {
    row: {
      flexDirection: 'row',
    },
    col: {
      flexDirection: 'column',
    },
    'row-reverse': {
      flexDirection: 'row-reverse',
    },
    'col-reverse': {
      flexDirection: 'column-reverse',
    },
  }),
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-end': {
    justifyContent: 'flex-end',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-around': {
    justifyContent: 'space-around',
  },
  'items-start': {
    alignItems: 'flex-start',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-end': {
    alignItems: 'flex-end',
  },
  'self-start': {
    alignSelf: 'flex-start',
  },
  'self-center': {
    alignSelf: 'center',
  },
  'self-end': {
    alignSelf: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'flex-wrap': {
    flexWrap: 'wrap',
  },
  'flex-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'flex-nowrap': {
    flexWrap: 'nowrap',
  },
  'flex-0': {
    flex: 0,
  },
  'flex-1': {
    flex: 1,
  },
  'grow-0': {
    flexGrow: 0,
  },
  'grow-1': {
    flexGrow: 1,
  },
  'shrink-0': {
    flexShrink: 0,
  },
  shrink: {
    flexShrink: 1,
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  'w-full': {
    width: '100%',
  },

  // one-half
  'w-1/2': {
    width: '50%',
  },
  // one-third
  'w-1/3': {
    width: '33.333333%',
  },
  'w-2/3': {
    width: '66.666667%',
  },
  // one-fourth
  'w-1/4': {width: '25%'},
  'w-2/4': {width: '50%'},
  'w-3/4': {width: '75%'},

  // one-fifth
  'w-1/5': {width: '20%'},
  'w-2/5': {width: '40%'},
  'w-3/5': {width: '60%'},
  'w-4/5': {width: '80%'},

  // one-sixth
  'w-1/6': {width: '16.666667%'},
  'w-2/6': {width: '33.333333%'},
  'w-3/6': {width: '50%'},
  'w-4/6': {width: '66.666667%'},
  'w-5/6': {width: '83.333333%'},

  // one-twelfth
  'w-1/12': {width: '8.333333%'},
  'w-2/12': {width: '16.666667%'},
  'w-3/12': {width: '25%'},
  'w-4/12': {width: '33.333333%'},
  'w-5/12': {width: '41.666667%'},
  'w-6/12': {width: '50%'},
  'w-7/12': {width: '58.333333%'},
  'w-8/12': {width: '66.666667%'},
  'w-9/12': {width: '75%'},
  'w-10/12': {width: '83.333333%'},
  'w-11/12': {width: '91.666667%'},

  // one-hundred
  'w-screen': {
    width: dimensions.fullWidth,
  },
  'w-auto': {
    width: 'auto',
  },

  'h-full': {
    height: '100%',
  },

  // one-half
  'h-1/2': {
    height: '50%',
  },
  // one-third
  'h-1/3': {
    height: '33.333333%',
  },
  'h-2/3': {
    height: '66.666667%',
  },
  // one-fourth
  'h-1/4': {height: '25%'},
  'h-2/4': {height: '50%'},
  'h-3/4': {height: '75%'},

  // one-fifth
  'h-1/5': {height: '20%'},
  'h-2/5': {height: '40%'},
  'h-3/5': {height: '60%'},
  'h-4/5': {height: '80%'},

  // one-sixth
  'h-1/6': {height: '16.666667%'},
  'h-2/6': {height: '33.333333%'},
  'h-3/6': {height: '50%'},
  'h-4/6': {height: '66.666667%'},
  'h-5/6': {height: '83.333333%'},

  // one-twelfth
  'h-1/12': {height: '8.333333%'},
  'h-2/12': {height: '16.666667%'},
  'h-3/12': {height: '25%'},
  'h-4/12': {height: '33.333333%'},
  'h-5/12': {height: '41.666667%'},
  'h-6/12': {height: '50%'},
  'h-7/12': {height: '58.333333%'},
  'h-8/12': {height: '66.666667%'},
  'h-9/12': {height: '75%'},
  'h-10/12': {height: '83.333333%'},
  'h-11/12': {height: '91.666667%'},

  // one-hundred
  'h-screen': {
    height: dimensions.fullHeight,
  },

  // box-shadow
  ...appendPrefix('shadow', {
    '': {
      // boxShadow:
      //   '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.17,
      shadowRadius: 3.05,
      elevation: 4,
    },
    sm: {
      // boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.19,
      shadowRadius: 5.62,
      elevation: 6,
    },
    md: {
      // boxShadow:
      //   '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.21,
      shadowRadius: 6.65,
      elevation: 9,
    },
    lg: {
      // boxShadow:
      //   '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.22,
      shadowRadius: 9.22,
      elevation: 12,
    },
    xl: {
      // boxShadow:
      //   '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.23,
      shadowRadius: 11.78,
      elevation: 15,
    },
    '2xl': {
      // boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 13,
      },
      shadowOpacity: 0.24,
      shadowRadius: 14.86,
      elevation: 18,
    },
    none: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 1.0,
      elevation: 1,
    },
  }),
  ...appendPrefix('rounded', {
    none: {
      borderRadius: 0,
    },
    sm: {
      borderRadius: 2,
    },
    '': {
      borderRadius: 4,
    },
    md: {
      borderRadius: 6,
    },
    lg: {
      borderRadius: 8,
    },
    xl: {
      borderRadius: 12,
    },
    '2xl': {
      borderRadius: 16,
    },
    '3xl': {
      borderRadius: 24,
    },
    full: {
      borderRadius: 9999,
    },
    's-none': {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
    },
    's-sm': {
      borderStartStartRadius: 2,
      borderEndStartRadius: 2,
    },
    s: {
      borderStartStartRadius: 4,
      borderEndStartRadius: 4,
    },
    's-md': {
      borderStartStartRadius: 6,
      borderEndStartRadius: 6,
    },
    's-lg': {
      borderStartStartRadius: 8,
      borderEndStartRadius: 8,
    },
    's-xl': {
      borderStartStartRadius: 12,
      borderEndStartRadius: 12,
    },
    's-2xl': {
      borderStartStartRadius: 16,
      borderEndStartRadius: 16,
    },
    's-3xl': {
      borderStartStartRadius: 24,
      borderEndStartRadius: 24,
    },
    's-full': {
      borderStartStartRadius: 9999,
      borderEndStartRadius: 9999,
    },

    'e-none': {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
    },
    'e-sm': {
      borderStartEndRadius: 2,
      borderEndEndRadius: 2,
    },
    e: {
      borderStartStartRadius: 4,
      borderEndStartRadius: 4,
    },
    'e-md': {
      borderStartStartRadius: 6,
      borderEndStartRadius: 6,
    },
    'e-lg': {
      borderStartStartRadius: 8,
      borderEndStartRadius: 8,
    },
    'e-xl': {
      borderStartStartRadius: 12,
      borderEndStartRadius: 12,
    },
    'e-2xl': {
      borderStartStartRadius: 16,
      borderEndStartRadius: 16,
    },
    'e-3xl': {
      borderStartStartRadius: 24,
      borderEndStartRadius: 24,
    },
    'e-full': {
      borderStartStartRadius: 9999,
      borderEndStartRadius: 9999,
    },
    't-none': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    't-sm': {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    t: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    't-md': {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    },
    't-lg': {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    't-xl': {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    't-2xl': {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    't-3xl': {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
    't-full': {
      borderTopLeftRadius: 9999,
      borderTopRightRadius: 9999,
    },

    'r-none': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    'r-sm': {
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
    },
    r: {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    },
    'r-md': {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },
    'r-lg': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    'r-xl': {
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
    },
    'r-2xl': {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
    'r-3xl': {
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
    },
    'r-full': {
      borderTopRightRadius: 9999,
      borderBottomRightRadius: 9999,
    },
    'b-none': {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    'b-sm': {
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 2,
    },
    b: {
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    },
    'b-md': {
      borderBottomRightRadius: 6,
      borderBottomLeftRadius: 6,
    },
    'b-lg': {
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
    },
    'b-xl': {
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
    },
    'b-2xl': {
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
    },
    'b-3xl': {
      borderBottomRightRadius: 24,
      borderBottomLeftRadius: 24,
    },
    'b-full': {
      borderBottomRightRadius: 9999,
      borderBottomLeftRadius: 9999,
    },
    'l-none': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    'l-sm': {
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
    },
    l: {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    },
    'l-md': {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
    },
    'l-lg': {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    'l-xl': {
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
    },
    'l-2xl': {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    'l-3xl': {
      borderTopLeftRadius: 24,
      borderBottomLeftRadius: 24,
    },
    'l-full': {
      borderTopLeftRadius: 9999,
      borderBottomLeftRadius: 9999,
    },
    'ss-none': {
      borderStartStartRadius: 0,
    },
    'ss-sm': {
      borderStartStartRadius: 2,
    },
    ss: {
      borderStartStartRadius: 4,
    },
    'ss-md': {
      borderStartStartRadius: 6,
    },
    'ss-lg': {
      borderStartStartRadius: 8,
    },
    'ss-xl': {
      borderStartStartRadius: 12,
    },
    'ss-2xl': {
      borderStartStartRadius: 16,
    },
    'ss-3xl': {
      borderStartStartRadius: 24,
    },
    'ss-full': {
      borderStartStartRadius: 9999,
    },
    'se-none': {
      borderStartEndRadius: 0,
    },
    'se-sm': {
      borderStartEndRadius: 2,
    },
    se: {
      borderStartEndRadius: 4,
    },
    'se-md': {
      borderStartEndRadius: 6,
    },
    'se-lg': {
      borderStartEndRadius: 8,
    },
    'se-xl': {
      borderStartEndRadius: 12,
    },
    'se-2xl': {
      borderStartEndRadius: 16,
    },
    'se-3xl': {
      borderStartEndRadius: 24,
    },
    'se-full': {
      borderStartEndRadius: 9999,
    },
    'ee-none': {
      borderEndEndRadius: 0,
    },
    'ee-sm': {
      borderEndEndRadius: 2,
    },
    ee: {
      borderEndEndRadius: 4,
    },
    'ee-md': {
      borderEndEndRadius: 6,
    },
    'ee-lg': {
      borderEndEndRadius: 8,
    },
    'ee-xl': {
      borderEndEndRadius: 12,
    },
    'ee-2xl': {
      borderEndEndRadius: 16,
    },
    'ee-3xl': {
      borderEndEndRadius: 24,
    },
    'ee-full': {
      borderEndEndRadius: 9999,
    },
    'es-none': {
      borderEndStartRadius: 0,
    },
    'es-sm': {
      borderEndStartRadius: 2,
    },
    es: {
      borderEndStartRadius: 4,
    },
    'es-md': {
      borderEndStartRadius: 6,
    },
    'es-lg': {
      borderEndStartRadius: 8,
    },
    'es-xl': {
      borderEndStartRadius: 12,
    },
    'es-2xl': {
      borderEndStartRadius: 16,
    },
    'es-3xl': {
      borderEndStartRadius: 24,
    },
    'es-full': {
      borderEndStartRadius: 9999,
    },
    'tl-none': {
      borderTopLeftRadius: 0,
    },
    'tl-sm': {
      borderTopLeftRadius: 2,
    },
    tl: {
      borderTopLeftRadius: 4,
    },
    'tl-md': {
      borderTopLeftRadius: 6,
    },
    'tl-lg': {
      borderTopLeftRadius: 8,
    },
    'tl-xl': {
      borderTopLeftRadius: 12,
    },
    'tl-2xl': {
      borderTopLeftRadius: 16,
    },
    'tl-3xl': {
      borderTopLeftRadius: 24,
    },
    'tl-full': {
      borderTopLeftRadius: 9999,
    },
    'tr-none': {
      borderTopRightRadius: 0,
    },
    'tr-sm': {
      borderTopRightRadius: 2,
    },
    tr: {
      borderTopRightRadius: 4,
    },
    'tr-md': {
      borderTopRightRadius: 6,
    },
    'tr-lg': {
      borderTopRightRadius: 8,
    },
    'tr-xl': {
      borderTopRightRadius: 12,
    },
    'tr-2xl': {
      borderTopRightRadius: 16,
    },
    'tr-3xl': {
      borderTopRightRadius: 24,
    },
    'tr-full': {
      borderTopRightRadius: 9999,
    },
    'br-none': {
      borderBottomRightRadius: 0,
    },
    'br-sm': {
      borderBottomRightRadius: 2,
    },
    br: {
      borderBottomRightRadius: 4,
    },
    'br-md': {
      borderBottomRightRadius: 6,
    },
    'br-lg': {
      borderBottomRightRadius: 8,
    },
    'br-xl': {
      borderBottomRightRadius: 12,
    },
    'br-2xl': {
      borderBottomRightRadius: 16,
    },
    'br-3xl': {
      borderBottomRightRadius: 24,
    },
    'br-full': {
      borderBottomRightRadius: 9999,
    },
    'bl-none': {
      borderBottomLeftRadius: 0,
    },
    'bl-sm': {
      borderBottomLeftRadius: 2,
    },
    bl: {
      borderBottomLeftRadius: 4,
    },
    'bl-md': {
      borderBottomLeftRadius: 6,
    },
    'bl-lg': {
      borderBottomLeftRadius: 8,
    },
    'bl-xl': {
      borderBottomLeftRadius: 12,
    },
    'bl-2xl': {
      borderBottomLeftRadius: 16,
    },
    'bl-3xl': {
      borderBottomLeftRadius: 24,
    },
    'bl-full': {
      borderBottomLeftRadius: 9999,
    },
  }),
  'text-center': {
    textAlign: 'center',
  },
  'text-left': {
    textAlign: 'left',
  },
  'text-right': {
    textAlign: 'right',
  },
  'text-justify': {
    textAlign: 'justify',
  },
  'text-uppercase': {
    textTransform: 'uppercase',
  },
  'text-capitalize': {
    textTransform: 'capitalize',
  },
  'text-4xl': {
    fontSize: applyFontSize(36),
    lineHeight: applyFontSize(44),
  },
  'text-3xl': {
    fontSize: applyFontSize(32),
    lineHeight: applyFontSize(40),
  },
  'text-2xl': {
    fontSize: applyFontSize(24),
    lineHeight: applyFontSize(32),
  },
  'text-xl': {
    fontSize: applyFontSize(20),
    lineHeight: applyFontSize(24),
  },
  'text-lg': {
    fontSize: applyFontSize(18),
    lineHeight: applyFontSize(24),
  },
  'text-base': {
    fontSize: applyFontSize(16),
    lineHeight: applyFontSize(20),
  },
  'text-sm': {
    fontSize: applyFontSize(14),
    lineHeight: applyFontSize(20),
  },
  'text-xs': {
    fontSize: applyFontSize(12),
    lineHeight: applyFontSize(16),
  },
  'text-xxs': {
    fontSize: applyFontSize(10),
    lineHeight: applyFontSize(16),
  },
  'font-normal': {
    fontWeight: 'normal',
  },
  'font-500': {
    fontWeight: '500',
  },
  'font-bold': {
    fontWeight: 'bold',
  },
  'text-300': {
    fontFamily: 'Inter-Light',
  },
  'text-400': {
    fontFamily: 'Inter-Regular',
  },
  'text-500': {
    fontFamily: 'Inter-Medium',
  },
  'text-600': {
    fontFamily: 'Inter-SemiBold',
  },
  'text-700': {
    fontFamily: 'Inter-Bold',
  },
  'body-300': {
    fontFamily: 'Rubik-Light',
  },
  'body-400': {
    fontFamily: 'Rubik-Regular',
  },
  'body-500': {
    fontFamily: 'Rubik-Medium',
  },
  'body-700': {
    fontFamily: 'Rubik-Bold',
  },
  'body-900': {
    fontFamily: 'Rubik-Black',
  },
  'heading-100': {
    fontFamily: 'Satoshi-Thin',
  },
  'heading-300': {
    fontFamily: 'Satoshi-UltraLight',
  },
  'heading-400': {
    fontFamily: 'Satoshi-Light',
  },
  'heading-500': {
    fontFamily: 'Satoshi-SemiLight',
  },
  'heading-700': {
    fontFamily: 'Satoshi-Regular',
  },
  'print-text-400': {
    fontFamily: 'VT323-Regular',
  },
  'overflow-hidden': {
    overflow: 'hidden',
  },
  'opacity-0': {
    opacity: 0,
  },
  'opacity-25': {
    opacity: 0.25,
  },
  'opacity-50': {
    opacity: 0.5,
  },
  'opacity-75': {
    opacity: 0.75,
  },
  'opacity-100': {
    opacity: 1,
  },
  ...appendPrefix('border', {
    solid: {
      borderStyle: 'solid',
    },
    dashed: {
      borderStyle: 'dashed',
    },
    dotted: {
      borderStyle: 'dotted',
    },
    double: {
      borderStyle: 'double',
    },
    hidden: {
      borderStyle: 'hidden',
    },
    none: {
      borderStyle: 'none',
    },
  }),
  ...Object.keys(spacing).reduce((acc, curr) => {
    return {
      ...acc,
      // padding
      [`p-${curr}`]: {padding: applySpacing(curr)},
      ['p-auto']: {padding: 'auto'},
      [`py-${curr}`]: {paddingVertical: applySpacing(curr)},
      ['py-auto']: {paddingTop: 'auto', paddingBottom: 'auto'},
      [`px-${curr}`]: {paddingHorizontal: applySpacing(curr)},
      ['px-auto']: {paddingLeft: 'auto', paddingRight: 'auto'},
      [`pt-${curr}`]: {paddingTop: applySpacing(curr)},
      ['pt-auto']: {paddingTop: 'auto'},
      [`pb-${curr}`]: {paddingBottom: applySpacing(curr)},
      ['pb-auto']: {paddingBottom: 'auto'},
      [`pl-${curr}`]: {paddingLeft: applySpacing(curr)},
      ['pl-auto']: {paddingLeft: 'auto'},
      [`pr-${curr}`]: {paddingRight: applySpacing(curr)},
      ['pr-auto']: {paddingRight: 'auto'},

      // margin
      [`m-${curr}`]: {margin: applySpacing(curr)},
      ['m-auto']: {margin: 'auto'},
      [`my-${curr}`]: {marginVertical: applySpacing(curr)},
      ['my-auto']: {marginTop: 'auto', marginBottom: 'auto'},
      [`mx-${curr}`]: {marginHorizontal: applySpacing(curr)},
      ['mx-auto']: {marginLeft: 'auto', marginRight: 'auto'},
      [`mt-${curr}`]: {marginTop: applySpacing(curr)},
      ['mt-auto']: {marginTop: 'auto'},
      [`mb-${curr}`]: {marginBottom: applySpacing(curr)},
      ['mb-auto']: {marginBottom: 'auto'},
      [`ml-${curr}`]: {marginLeft: applySpacing(curr)},
      ['ml-auto']: {marginLeft: 'auto'},
      [`mr-${curr}`]: {marginRight: applySpacing(curr)},
      ['mr-auto']: {marginRight: 'auto'},

      // height
      [`h-${curr}`]: {height: applySpacing(curr, 'height')},
      [`min-h-${curr}`]: {minHeight: applySpacing(curr, 'height')},
      ['min-h-min']: {minHeight: 'min-content'},
      ['min-h-max']: {minHeight: 'max-content'},
      ['min-h-fit']: {minHeight: 'fit-content'},
      ['min-h-full']: {minHeight: '100%'},

      [`max-h-${curr}`]: {maxHeight: applySpacing(curr, 'height')},
      ['max-h-min']: {maxHeight: 'min-content'},
      ['max-h-max']: {maxHeight: 'max-content'},
      ['max-h-fit']: {maxHeight: 'fit-content'},
      ['max-h-full']: {maxHeight: '100%'},

      // width
      [`w-${curr}`]: {width: applySpacing(curr)},
      [`min-w-${curr}`]: {minWidth: applySpacing(curr)},
      ['min-w-min']: {minWidth: 'min-content'},
      ['min-w-max']: {minWidth: 'max-content'},
      ['min-w-fit']: {minWidth: 'fit-content'},
      ['min-w-full']: {minWidth: '100%'},

      [`max-w-${curr}`]: {maxWidth: applySpacing(curr)},
      ['max-w-min']: {maxWidth: 'min-content'},
      ['max-w-max']: {maxWidth: 'max-content'},
      ['max-w-fit']: {maxWidth: 'fit-content'},
      ['max-w-full']: {maxWidth: '100%'},

      // border
      [`rounded-${curr}`]: {borderRadius: applySpacing(curr)},
      [`border-${curr}`]: {borderWidth: applySpacing(curr)},
      [`border-t-${curr}`]: {borderTopWidth: applySpacing(curr)},
      [`border-b-${curr}`]: {borderBottomWidth: applySpacing(curr)},
      [`border-r-${curr}`]: {borderRightWidth: applySpacing(curr)},
      [`border-l-${curr}`]: {borderLeftWidth: applySpacing(curr)},
      [`border-x-${curr}`]: {
        borderLeftWidth: applySpacing(curr),
        borderRightWidth: applySpacing(curr),
      },
      [`border-y-${curr}`]: {
        borderTopWidth: applySpacing(curr),
        borderBottomWidth: applySpacing(curr),
      },

      // line-height
      [`leading-${curr}`]: {lineHeight: applySpacing(curr)},

      // positions
      [`top-${curr}`]: {top: applySpacing(curr)},
      [`-top-${curr}`]: {top: applySpacing(curr) * -1},
      [`right-${curr}`]: {right: applySpacing(curr)},
      [`-right-${curr}`]: {right: applySpacing(curr) * -1},
      [`bottom-${curr}`]: {bottom: applySpacing(curr)},
      [`-bottom-${curr}`]: {bottom: applySpacing(curr) * -1},
      [`left-${curr}`]: {left: applySpacing(curr)},
      [`-left-${curr}`]: {left: applySpacing(curr) * -1},
    };
  }, {}),
  ...Object.keys(flattenedColors).reduce((acc, curr) => {
    return {
      ...acc,
      [`bg-${curr}`]: {backgroundColor: flattenedColors[curr]},
      [`text-${curr}`]: {color: flattenedColors[curr]},
      [`border-${curr}`]: {borderColor: flattenedColors[curr]},
      [`border-t-${curr}`]: {borderTopColor: flattenedColors[curr]},
      [`border-b-${curr}`]: {borderBottomColor: flattenedColors[curr]},
      [`border-l-${curr}`]: {borderLeftColor: flattenedColors[curr]},
      [`border-r-${curr}`]: {borderRightColor: flattenedColors[curr]},
      [`border-x-${curr}`]: {
        borderLeftColor: flattenedColors[curr],
        borderRightColor: flattenedColors[curr],
      },
      [`border-y-${curr}`]: {
        borderTopColor: flattenedColors[curr],
        borderBottomColor: flattenedColors[curr],
      },
    };
  }, {}),
  ...[0, 1, 2, 3, 4].reduce((acc, curr) => {
    return {
      ...acc,
      [`elevation-${curr}`]: {elevation: curr},
    };
  }, {}),
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  'normal-case': {
    textTransform: 'none',
  },
  'z-0': {
    zIndex: 0,
  },
  'z-10': {
    zIndex: 10,
  },
  'z-20': {
    zIndex: 20,
  },
  'z-30': {
    zIndex: 30,
  },
  'z-40': {
    zIndex: 40,
  },
  'z-50': {
    zIndex: 50,
  },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
});
