import React from 'react';
import {View,Text}from 'react-native';
import {Button} from 'native-base';
import { Actions } from 'react-native-router-flux';
const navigationItems = () => (
    <View style={{flexDirection: 'row'}}>
        <Button style={{backgroundColor:'#703B09'}}>
            <Text style={{fontSize: 15, color: 'white', fontWeight:'bold'}}>
                Burger
            </Text>
        </Button>
        <Button style={{backgroundColor:'#703B09'}}>
            <Text style={{fontSize: 15, color: 'white', fontWeight:'bold'}}>
                Cart
            </Text>
        </Button>
    </View>

);

export default navigationItems;
