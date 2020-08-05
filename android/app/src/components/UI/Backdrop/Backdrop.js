import React from 'react';
import { View } from 'react-native';
import styles from './Backdropcs';
const backdrop = (props) => (
    props.show ? <View style={styles.Backdrop} onClick={props.clicked}></View> : null
);

export default backdrop;