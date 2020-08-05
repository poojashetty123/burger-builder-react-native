import React, { Component } from "react";
import { View } from 'react-native';
import Aux from '../../../src/hoc/Auxfile';
import styles from './Layoutcs';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
class Layout extends Component{
    render(){
        return(
            <Aux>
                <Toolbar />
                <View style={styles.Content}>
                    {this.props.children}
                </View>
            </Aux>
        );
    }
}

export default Layout;  