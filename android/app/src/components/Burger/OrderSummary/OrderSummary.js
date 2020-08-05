import React from 'react';
import Aux from '../../../hoc/Auxfile';
import {Text} from 'react-native';
import {List} from 'native-base';
import Unorderedlist from 'react-native-unordered-list';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => {
        return (
        <List key={igkey}>
            <Text style={{textTransform: 'capitalize'}}>{igkey} : {props.ingredients[igkey]}</Text>
        </List>);
    });
    return (
        <Aux>
            <Text>Your Order</Text>
            <Text>A delicious burger with the following ingredients</Text>
            <Unorderedlist>
               {ingredientSummary}
            </Unorderedlist>
            <Text>Continue To Checkout?</Text>
        </Aux>
    );
};

export default orderSummary;