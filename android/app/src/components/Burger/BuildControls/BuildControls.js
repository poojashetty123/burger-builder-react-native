import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../BuildControls/BuildControlscs';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];
const buildControls = (props) => (
    <View style={styles.BuildControls}>
        <Text style={{fontWeight: 'bold',flexDirection:'row',marginLeft: 100}}>Current Prices: {props.price.toFixed(2)}</Text>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />
        ))}
        <View style={styles.OrderButton}>
            <View style={styles.navBar}>
                <View>
                    <Button 
                    onPress={props.ordered}
                    title= "ADD TO Cart"
                    color=  '#966909'
                    disabled={!props.purchasable} />
                </View>
                 {/* <View>
                    <Button 
                    title= "Add To Cart"
                    color=  '#966909'
                    disabled={!props.purchasable} />
                </View>  */}
            </View>
        </View>
    </View>
);
export default buildControls;