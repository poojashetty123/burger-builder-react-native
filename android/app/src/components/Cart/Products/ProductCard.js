import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductCard = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>Bacon: {props.ingredients.bacon} Cheese: {props.ingredients.cheese} Meat: {props.ingredients.meat} Salad: {props.ingredients.salad}</Text>
            <Text>Price: USD {props.price}</Text>
            <Text>Quantity: {props.quantity}</Text>
            <Button 
            title= "Add"
            onPress={() => props.quantityAction('add', props.productId)} />
            <Button 
            onPress={() => props.quantityAction('remove', props.productId)}
            title= "Remove" />
            <Button 
            onPress={() => props.quantityAction('remove', props.productId)}
            title= "Delete Product" />
        </View>
    )
}

export default ProductCard;