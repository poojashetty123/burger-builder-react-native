import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import {Header, Right, Left} from 'native-base';
import {Image} from 'react-native';
const toolbar = () => (
    <Header style={{backgroundColor:'#703B09'}}>
        <Left>
            <Image source={require('../../../assets/images/burger-logo.png')} 
            style = {{ width: 30, height: 30 ,backgroundColor:'white'}} />
        </Left>
       <Right>
            <NavigationItems />
       </Right>
    </Header>
);
export default toolbar;