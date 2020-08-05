import React from 'react';
import styles from '../BuildControl/BuildControlcs';
import { View, Text, Button } from 'react-native';
import {StyleSheet} from 'react-native';

const buildControl = (props) => (
    <View style={styles.BuildControl}>
        <View style={styles.navBar}>
            <View style={styles.itemStyle}>
                <Text style={styles.Label}>{props.label}</Text>
            </View>
            <View style={styles.itemStyle}>
                <Button title="Less"
                color="#AA6817"
                onPress={props.removed}
                disabled={props.disabled} />
            </View>
            <View style={styles.itemStyle}>
                <Button title="More"
                color="#AA6817" 
                onPress={props.added} /> 
            </View>
        </View>
    </View>
);

export default buildControl;