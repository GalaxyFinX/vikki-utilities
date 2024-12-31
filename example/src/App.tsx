import { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { captureViewAndShare } from 'vikki-utilities';

export default function App() {
  const ref = useRef(null);

  const onPress = async () => {
    // await Device.init();
    await captureViewAndShare(ref.current, 'VIKKI');
  };

  return (
    <View style={styles.container}>
      <ViewShot ref={ref}>
        <TouchableOpacity onPress={onPress} ref={ref}>
          <Text>Result</Text>
        </TouchableOpacity>
      </ViewShot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
