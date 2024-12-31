import { Dimensions, StatusBar } from 'react-native';
import { Scaling } from './scaling';
import { IS_IOS } from '../../constants';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');
const STATUS_BAR_HEIGHT = IS_IOS ? 0 : StatusBar.currentHeight || 0;
const NAVIGATION_BAR_HEIGHT = IS_IOS
  ? 0
  : SCREEN_HEIGHT - DEVICE_HEIGHT - STATUS_BAR_HEIGHT;

// Height of the soft menu bar (supported on most new Android devices) - Default 56 material
const NAVIGATION_MENU_BAR_BOTTOM_ANDROID = 56;
const SOFT_MENU_BAR_HEIGHT = IS_IOS ? 0 : NAVIGATION_MENU_BAR_BOTTOM_ANDROID;

const DEFAULT_SIMPLE_HEADER_HEIGHT = Scaling.vs(40);

// 8-point spacing system
const Spacer = Object.freeze({
  XSmall: 2,
  Small: 4,
  Base: 8,
  Regular: 12,
  Medium: 16,
  Large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 40,
  Huge: 48,
  Massive: 64,
});

const Size = Object.freeze({
  Vertical: {
    XSmall: Scaling.vs(Spacer.XSmall),
    Small: Scaling.vs(Spacer.Small),
    Base: Scaling.vs(Spacer.Base),
    Regular: Scaling.vs(Spacer.Regular),
    Medium: Scaling.vs(Spacer.Medium),
    Large: Scaling.vs(Spacer.Large),
    xLarge: Scaling.vs(Spacer.xLarge),
    xxLarge: Scaling.vs(Spacer.xxLarge),
    xxxLarge: Scaling.vs(Spacer.xxxLarge),
    Huge: Scaling.vs(Spacer.Huge),
    Massive: Scaling.vs(Spacer.Massive),
  },
  Horizontal: {
    XSmall: Scaling.hs(Spacer.XSmall),
    Small: Scaling.hs(Spacer.Small),
    Base: Scaling.hs(Spacer.Base),
    Regular: Scaling.hs(Spacer.Regular),
    Medium: Scaling.hs(Spacer.Medium),
    Large: Scaling.hs(Spacer.Large),
    xLarge: Scaling.hs(Spacer.xLarge),
    xxLarge: Scaling.hs(Spacer.xxLarge),
    xxxLarge: Scaling.hs(Spacer.xxxLarge),
    Huge: Scaling.hs(Spacer.Huge),
    Massive: Scaling.hs(Spacer.Massive),
  },
  ...Scaling,
});

export {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT,
  Size,
  SOFT_MENU_BAR_HEIGHT,
  DEFAULT_SIMPLE_HEADER_HEIGHT,
};
