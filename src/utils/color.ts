import { StyleSheet } from 'react-native';

export const getColorType = (color: string) => {
  if (
    new RegExp(
      /^rgba\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|0?\.\d|1(\.0)?)\)$/,
    ).test(color)
  ) {
    return 'rgba';
  }
  if (
    new RegExp(
      /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/,
    ).test(color)
  ) {
    return 'rgb';
  }

  if (new RegExp(/^#?([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/i).test(color)) {
    return 'hex';
  }

  throw `The provided color ${color} is not a valid (hex | rgb | rgba) color`;
};

export const getRgbaColor = (color: string) => {
  const type = getColorType(color);

  if (type === 'hex') {
    if (color.length < 6) {
      return color.substring(0, 4) + '0';
    }
    return color.substring(0, 7) + '00';
  }
  //@ts-ignore
  const [r, g, b] = color.match(/\d+/g);
  return `rgba(${r},${g},${b},0)`;
};

export const getGradientProps = () => ({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  style: { ...StyleSheet.absoluteFillObject },
});
