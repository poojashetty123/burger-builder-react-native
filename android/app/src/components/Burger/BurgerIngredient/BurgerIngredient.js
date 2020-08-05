import React, {Component} from 'react';
import styles from '../BurgerIngredient/BurgerIngredientcs';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class BurgerIngredient extends Component {
    render (){
        let ingredient = null;
    switch ( this.props.type ) {
        case ( 'bread-bottom' ):
            ingredient= 
            <LinearGradient colors={['#F08E4A', '#e27b36']}
            style={{ 
                borderBottomLeftRadius: 900, 
                borderBottomRightRadius: 900
              }}>
             <View style={styles.BreadBottom}></View>
            </LinearGradient>;
           break;
        case ( 'bread-top' ):
            ingredient = (
           <LinearGradient colors={['#bc581e', '#e27b36']}
           style={{ 
            borderTopLeftRadius: 900, 
            borderTopRightRadius: 900
           }}>
                <View style={styles.BreadTop}>
                    <View style={styles.Seeds1}></View>
                    <View style={styles.Seeds2}></View>
                </View>
            </LinearGradient>
            );
            break;
        case ( 'meat' ):
            ingredient = 
            <LinearGradient colors={['#7f3608', '#702e05']}>
                <View style={styles.Meat}></View>
            </LinearGradient>;
            break;
        case ( 'cheese' ):
            ingredient = 
            <LinearGradient colors={['#f4d004', '#d6bb22']}>
                <View style={styles.Cheese}></View>
           </LinearGradient>;
            break;
        case ( 'bacon' ):
            ingredient = 
            <LinearGradient colors={['#bf3813', '#c45e38']}>
            <View style={styles.Bacon}></View>
            </LinearGradient>;
            break;
        case ( 'salad' ):
            ingredient = 
           <LinearGradient colors={['#228c1d', '#91ce50']}>
            <View style={styles.Salad}></View>
            </LinearGradient>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
    }
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
