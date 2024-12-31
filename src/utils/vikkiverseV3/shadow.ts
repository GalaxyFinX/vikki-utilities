import { Platform, StyleSheet } from 'react-native';

/**
 * @description This variable was exported from Shadow / Stroke section - Vikkiverse design system
 */
const Shadow = StyleSheet.create({
  CardBase: Platform.select({
    ios: {
      shadowColor: '#00000026',
      shadowOpacity: 1,
      shadowRadius: 1,
      shadowOffset: { width: 0, height: 1 },
    },
    default: { elevation: 1 },
  }),
});

export { Shadow };
