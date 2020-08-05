import React, {Component} from 'react';
import { View } from 'react-native';
import styles from '../Modal/Modalcs';
import Aux from '../../../../src/hoc/Auxfile';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <View style={styles.Modal}>
            <View style = {{ 
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
                }}>
                {props.children}
            </View>
        </View>
    </Aux>
);

export default modal;

