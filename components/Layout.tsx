/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
} from 'react-native';

import StyleGuide from '../assets/style-guide';

import { GenericStylesProp } from './StackedText';
import {scaledSize} from '../assets/style-guide/typography';
import { useAnimatedKeyboard } from 'react-native-reanimated';
import {applyStyles} from '../assets/styles';
import { Height } from '@/utility/scalers';
import useKeyboard from '@/hooks/useKeyboard';
// import {useRemoteConfig} from '../context';
// import {defaultTo} from 'lodash';

type LayoutProps = {
  style?: GenericStylesProp;
  safeAreaViewStyleTop?: GenericStylesProp;
  safeAreaViewStyleBottom?: GenericStylesProp;
  children: any;
  touchable?: boolean;
  isLoading?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  safeAreaViewStyleTop,
  safeAreaViewStyleBottom,
  touchable = true,
  isLoading = false,
}) => {
//   const {inDevMode, showDevModeBanner, showDevModeBannerText} =
//     useRemoteConfig();
  const {isKeyboardVisible} = useKeyboard();
  useEffect(() => {
    if (touchable) {
      Keyboard.dismiss();
    }
  }, [touchable]);

  if (isLoading) {
    return (
      <View
        style={applyStyles({
          flex: 1,
        })}>
        <View style={applyStyles('h-full w-full')}>
          <View style={applyStyles('absolute w-full', {top: Height * 0.5})}>
            <View
              style={applyStyles('flex-1 w-full justify-center items-center')}>
              <ActivityIndicator
                size="large"
                color={StyleGuide.Colors.primary}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView
        style={[
          {backgroundColor: StyleGuide.Colors.white},
          safeAreaViewStyleTop,
        ]}
      />
      <SafeAreaView
        style={[
          styles.safeView,
          {backgroundColor: StyleGuide.Colors.white},
          safeAreaViewStyleBottom,
        ]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          {/* {inDevMode && showDevModeBanner && (
            <View style={applyStyles('h-20 w-full bg-shades-red-500')}>
              <View
                style={applyStyles(
                  'w-11/12 h-full mx-auto flex justify-center items-center',
                )}>
                <View style={applyStyles('')}>
                  <Text style={applyStyles('text-sm text-white capitalize')}>
                    {defaultTo(showDevModeBannerText, 'in dev mode')}
                  </Text>
                </View>
              </View>
            </View>
          )} */}
          {touchable ? (
            <TouchableWithoutFeedback
              style={{flex: 1}}
              onPress={() => Keyboard.dismiss()}>
              <View
                style={[
                  styles.default,
                  isKeyboardVisible && {
                    paddingBottom:
                      Platform.OS === 'ios' ? scaledSize(16) : scaledSize(16),
                  },
                  style,
                ]}>
                {children}
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <View
              style={[
                styles.default,
                isKeyboardVisible && {
                  paddingBottom:
                    Platform.OS === 'ios' ? scaledSize(16) : scaledSize(16),
                },
                style,
              ]}>
              {children}
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  default: {
    flex: 1,
    backgroundColor: StyleGuide.Colors.white,
    paddingTop: Platform.OS === 'ios' ? scaledSize(8) : scaledSize(16),
    paddingHorizontal: scaledSize(24),
  },
});

export default Layout;
