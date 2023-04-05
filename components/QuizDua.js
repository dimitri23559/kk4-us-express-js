import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';

const QuizDua = () => {
    return (
        <View style={{padding: 10, margin:20, top:-100}}>
            <View style={{}}>
            <Text style={[styles.title, 
            {
                left: 70,
                top: 15,
            },
            ]}>Quiz 2 Lembaga Negara</Text>
            <View style={{backgroundColor:'#FCF0FE', padding: 12, width: 50, borderRadius: 12}}>
            <Image source={require('../assets/book.png')} />
            </View>
            <Text style={[styles.title2, 
                {
                    left: 80,
                    top: -25,
                },
                ]}>landasan hukum</Text>
            </View>
           
            <View>
                <Button style={{backgroundColor: '#FF8400', top: -70, width: 140, left: 160, borderRadius: 10, borderWidth: 1, borderColor: 'FF8400'}} onPress={() => Alert.alert('OKEHH')}>
                    Mulai Quiz</Button>
                <Button style={{backgroundColor: '#ada6ad', top: -115, width: 140, left: -12, borderRadius: 10, borderColor: '#ada6ad', }} onPress={() => Alert.alert('OK')}>
                    Review</Button>
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
export default QuizDua;