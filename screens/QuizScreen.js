import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState,useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import QuizSatu from '../components/QuizSatu';
import QuizDua from '../components/QuizDua';
import axios from 'axios';

 const QuizScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://4665-2001-448a-40a8-10fb-213c-dcab-f17-93ca.ap.ngrok.io/api/quizzes', {
      }) // Ambil data materi dari API
      .then((response) => {
        console.log(response)
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }, []);

   const [state, setState] = useState('MPR');
   const onClick = (item) => () => {
     setState(item);
   };
   return (
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Layout style={styles.container}>
        
          
          <View style={{display: 'flex', flexDirection: 'column'}}>
          {data.map((item, index) => {
            return (<QuizSatu key={index} navigation={navigation} />)
          })} 
          </View>
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
   title: {
      marginTop: 50,
      marginLeft: 40,
      margin: 50,
      flex: 2,
      padding:40,
      fontWeight: "bold",
      fontSize: 15,
   },
   logo: {
    marginLeft: 15,
    marginTop: -110,
    flex: 4,
    padding: 15,
    margin: 45,
   },
    footerContainer: {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',

    },
    footerControl: {
      marginHorizontal: 2,
      alignContent: 'space-between',
      top: 12,
      left: -112,
    },
    footerControlSecond: {
      marginHorizontal: 2,
      backgroundColor: '#b835d9',
      borderColor: '#b835d9',
      top: 12,
      left: -50,

    },
    title2: {
      top: -85,
      left: 90,
    },
 });

 export default QuizScreen;