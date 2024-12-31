import { StyleSheet } from 'react-native';
//
import { Fonts } from './font';
import { Size } from './size';
import { Colors } from './color';

const TextLargeTitle = StyleSheet.create({
  Emphasized: {
    fontFamily: Fonts.Bold,
    fontSize: Size.ms(32),
    lineHeight: Size.ms(40),
    letterSpacing: -0.4,
    color: Colors.Labels.PrimaryLight,
  },
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(32),
    lineHeight: Size.ms(40),
    letterSpacing: -0.4,
    color: Colors.Labels.PrimaryLight,
  },
  SemiBold: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(32),
    lineHeight: Size.ms(40),
    letterSpacing: -0.4,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextTitle1 = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(28),
    lineHeight: Size.ms(34),
    letterSpacing: -0.38,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.Bold,
    fontSize: Size.ms(28),
    lineHeight: Size.ms(34),
    letterSpacing: -0.38,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextTitle2 = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(24),
    lineHeight: Size.ms(30),
    letterSpacing: -0.26,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(24),
    lineHeight: Size.ms(30),
    letterSpacing: -0.26,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextTitle3 = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(20),
    lineHeight: Size.ms(25),
    letterSpacing: -0.45,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(20),
    lineHeight: Size.ms(25),
    letterSpacing: -0.45,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextHeadline = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(16),
    lineHeight: Size.ms(22),
    letterSpacing: -0.43,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(16),
    lineHeight: Size.ms(22),
    letterSpacing: -0.43,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextBody = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(16),
    lineHeight: Size.ms(22),
    letterSpacing: -0.43,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(16),
    lineHeight: Size.ms(22),
    letterSpacing: -0.43,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.Italic,
    fontSize: Size.ms(16),
    lineHeight: Size.ms(22),
    letterSpacing: -0.43,
    color: Colors.Labels.PrimaryLight,
  },
  EmphasizedItalic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(16),
    lineHeight: Size.ms(22),
    letterSpacing: -0.43,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextCallout = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(15),
    lineHeight: Size.ms(21),
    letterSpacing: -0.31,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(15),
    lineHeight: Size.ms(21),
    letterSpacing: -0.31,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.Italic,
    fontSize: Size.ms(15),
    lineHeight: Size.ms(21),
    letterSpacing: -0.31,
    color: Colors.Labels.PrimaryLight,
  },
  EmphasizedItalic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(15),
    lineHeight: Size.ms(21),
    letterSpacing: -0.31,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextSubHeadline = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(14),
    lineHeight: Size.ms(20),
    letterSpacing: -0.23,
    color: Colors.Labels.PrimaryLight,
  },
  Medium: {
    fontFamily: Fonts.Medium,
    fontSize: Size.ms(14),
    lineHeight: Size.ms(20),
    letterSpacing: -0.23,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(14),
    lineHeight: Size.ms(20),
    letterSpacing: -0.23,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.Italic,
    fontSize: Size.ms(14),
    lineHeight: Size.ms(20),
    letterSpacing: -0.23,
    color: Colors.Labels.PrimaryLight,
  },
  EmphasizedItalic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(14),
    lineHeight: Size.ms(20),
    letterSpacing: -0.23,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextFootNote = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(13),
    lineHeight: Size.ms(18),
    letterSpacing: -0.08,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(13),
    lineHeight: Size.ms(18),
    letterSpacing: -0.08,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.Italic,
    fontSize: Size.ms(13),
    lineHeight: Size.ms(18),
    letterSpacing: -0.08,
    color: Colors.Labels.PrimaryLight,
  },
  EmphasizedItalic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(13),
    lineHeight: Size.ms(18),
    letterSpacing: -0.08,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextCaption1 = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(12),
    lineHeight: Size.ms(16),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  Medium: {
    fontFamily: Fonts.Medium,
    fontSize: Size.ms(12),
    lineHeight: Size.ms(18),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(12),
    lineHeight: Size.ms(16),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.Italic,
    fontSize: Size.ms(12),
    lineHeight: Size.ms(16),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  EmphasizedItalic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(12),
    lineHeight: Size.ms(16),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
});

const TextCaption2 = StyleSheet.create({
  Regular: {
    fontFamily: Fonts.Regular,
    fontSize: Size.ms(11),
    lineHeight: Size.ms(13),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  Emphasized: {
    fontFamily: Fonts.SemiBold,
    fontSize: Size.ms(11),
    lineHeight: Size.ms(13),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  Italic: {
    fontFamily: Fonts.Italic,
    fontSize: Size.ms(11),
    lineHeight: Size.ms(13),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
  EmphasizedItalic: {
    fontFamily: Fonts.SemiBoldItalic,
    fontSize: Size.ms(11),
    lineHeight: Size.ms(13),
    letterSpacing: -0.1,
    color: Colors.Labels.PrimaryLight,
  },
});

const Typography = Object.freeze({
  TextLargeTitle,
  TextTitle1,
  TextTitle2,
  TextTitle3,
  TextHeadline,
  TextBody,
  TextCallout,
  TextSubHeadline,
  TextFootNote,
  TextCaption1,
  TextCaption2,
});

export type TypographyType = typeof Typography;

export { Typography };
