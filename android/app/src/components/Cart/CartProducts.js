import React from 'react';
import ProductCard from './Products/ProductCard';
import {View,Text} from 'react-native';
import {List} from 'native-base';
const CartProducts = (props) => {
        let products = props.cartProducts.map((product, index) => {
            return (
                <ProductCard
                    key={product.id}
                    count={index + 1}
                    name={product.name}
                    ingredients={product.ingredients}
                    price={product.price}
                    productId={product.id}
                    quantity={product.quantity}
                    quantityAction={props.quantityAction}
                />
            )
        })
        return (
            <View>
               
                <Text>Total cart price: USD {props.cartPrice.toFixed(2)}</Text>
                {products}
                
            </View>
        )
}


export default CartProducts;
