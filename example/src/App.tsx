import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Storage } from 'vikki-utilities';

export default function App() {
  useEffect(() => {
    Storage.save('CIF_ID', '1234567890');
  }, []);

  const a = Storage.retrieve('CIF_ID');

  return (
    <View style={styles.container}>
      <Text>Result: {a}</Text>
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
