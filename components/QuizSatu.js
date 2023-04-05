import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import axios from 'axios';

const QuizSatu = ({ navigation, item }) => {
    const [data, setData] = useState([]);
    
    return (
        <View style={{ padding: 10, marginHorizontal: 20, marginVertical: 5 }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{ backgroundColor: '#FCF0FE', padding: 12, width: 50, borderRadius: 12 }}>
                    <Image source={require('../assets/book.png')} />
                </View>
                <View style={{marginHorizontal: 5}}></View>
                <View style={{}}>
                    <Text style={[styles.title,
                    ]}>landasan hukum</Text>
                    <Text style={[styles.title2,
                    ]}>landasan hukum</Text>
                </View>
            </View>
            
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5 }}>
                <Button style={{ backgroundColor: '#FF8400', width: '100%', borderRadius: 10, borderWidth: 1, borderColor: '#FF8400' }} onPress={() => navigation.navigate('QuizSoal')}>
                    Mulai Quiz</Button>
                <View style={{ marginHorizontal: 1.5 }}></View>
                {/* <Button style={{ backgroundColor: '#ada6ad', width: 140, borderRadius: 10, borderColor: '#ada6ad', }} onPress={() => navigation.navigate('ReviewScore')}>
                    Review</Button> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    title2: {
        fontSize: 14,
        color: '#A5A5A5'
    },
    fill: {
        color: '#B835D9'
    }
})
export default QuizSatu;