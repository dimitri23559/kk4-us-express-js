import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView,FlatList,TouchableOpacity,StatusBar,Image,ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
;
import InputCustom from '../components/Input';
import Card from '../components/Card';


const quiss = [
  {
    image: require('../assets/test.png'),
    nama: 'pasal',
    deskripsi: 'Kuis seputar sejarah Indonesia',
  },
  {
    image: require('../assets/test.png'),
    nama: 'sejarah nkri',
    deskripsi: 'Kuis seputar matematika',
  },
  {
    image: require('../assets/test.png'),
    nama: 'pancasila',
    deskripsi: 'Kuis seputar kimia',
  },
];

const lembaga = [
  {
    image: require ('../assets/test.png'),
    nama : 'pasal',
    deskripsi : 'ketuk untuk melihat isi pasal',

  },
  {
    image: require ('../assets/test.png'),
    nama: 'sejarah nkri',
    deskripsi : 'ketuk untuk melihat  isi sejarah nkri',

  },
  {
    image: require ('../assets/test.png'),
    nama : 'pancasila',
    deskripsi : 'ketuk untuk melihat isi pancasila',

  },
];



const HomeScreen = ({navigation}) => {
  const [state, setState] = useState('MPR');
  const onClick = (item) => () => {
    setState(item);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Layout style={styles.container}>
          <Title />
          
          <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
            materi
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
  {
    lembaga.map((item, index) => {
      return(
        <TouchableOpacity 
          key={index} 
          onPress={() => navigation.navigate('Soal', {nama: item.nama })}
          style={{ width: '90%', marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1, elevation: 2 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.nama}</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <Text>{item.deskripsi}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }
</View>
<View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
            soal
          </Text>
        </View>
<FlatList
  data={quiss}
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  style={{ marginVertical: 20 }}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={{
        marginRight: 10,
        backgroundColor: "#fff",
        elevation: 3,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 10,
        borderRadius: 15,
      }}
      onPress={() =>
        navigation.navigate("QuizSoal", { nama: item.nama })
      }
    >
      <ImageBackground
        source={item.image}
        style={{
          width: 200,
          height: 150,
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 3,
        }}
        resizeMode={"stretch"}
      ></ImageBackground>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {item.nama}
        </Text>
        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>
          {item.deskripsi}
        </Text>
      </View>
    </TouchableOpacity>
  )}
/>



        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 24,
  },
});

export default HomeScreen;