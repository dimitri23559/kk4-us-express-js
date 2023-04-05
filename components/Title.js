import { Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const Title = () => {
  return (
    <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
            landasan<Text style={{fontSize: 28,color: '#F5747D'}}>hukum</Text>
          </Text>
        </View>
  );
};

const styles = StyleSheet.create({
  textSubtitle: {
    color: '#A5A5A5'
  }
});

export default Title;
