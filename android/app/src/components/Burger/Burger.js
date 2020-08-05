import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import styles from './Burgercs';

const burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <Text style={{textAlign:'center',fontWeight:'bold'}}>Please start adding ingredients!</Text>;
    }
    return(
      
        <View style={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </View>
        );
};

export default burger;
