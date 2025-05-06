/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#646982',
    textBold: '#32343E',
    textButton: '#FFFFFF',
    background: '#fff',
    buttonBackground: '#FF7622',
    inputBackground: '#E0E2E8',
    inputText: '#32343E',
    placeholderText: '#A0A5BA',
    tint: tintColorLight,
    icon: '#FC6E2A',
    tabIconDefault: '#687076',
  },
  dark: {
    text: '#ECEDEE',
    background: '#000',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
