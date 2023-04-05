import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import piala from '../assets/pialaa.png'



const ReviewScreen = ({navigation, route}) => {
    console.log(route.params, 'hasil')
return (
    <View style={{padding: 15, margin: 50}}>
    <View>
        <Text style={styles.text}>Quiz 1 Teks Prosedur</Text>
        <Text style={styles.text2}>Pengenalan Teks Prosedur</Text>
    </View>
        <View>
            <Image source={require('../assets/pialaa.png')} style={{width:235, height: 235, top: 99}}/>
        </View>
        <View>
            <Text style={styles.text3}>Selamat!</Text>
        </View>
        <View>
            <Text style={[styles.text2, 
                {
                    top: 140
                },]}>{route?.params?.message}</Text>
        </View>
        
        
        <View>
            <Button style={{backgroundColor: '#B835D9', top: 230, width:330, left: -40, borderWidth: 1, borderRadius:10, height: 55, borderColor: '#B835D9'}} onPress={() => navigation.navigate('Home')}>Selesai</Button>
        </View>
    </View>
    
 );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: '100',
        fontSize: 25,
        textAlign: 'center'
    },
    text2: {
        fontsize: 12,
        color: '#A5A5A5',
        textAlign: 'center'
    },
    text3: {
        textAlign: 'center',
        top: 140,
        fontSize: 20,

    },
    text4: {
        textAlign: 'center',
        color: '#A5A5A5',
        fontSize: 14,
        top: 190
    },
    text5: {
        fontSize: 35,
        textAlign: 'center',
        top: 200,
        fontWeight: 'bold'
    }
});

export default ReviewScreen;