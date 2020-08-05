import { StyleSheet } from "react-native";

export default StyleSheet.create({

    BreadBottom: {
        height: 30,
        borderBottomLeftRadius: 900,
        borderBottomRightRadius: 900,
       
    },
    
    BreadTop: {
        height: 30,
        borderTopLeftRadius: 900,
        borderTopRightRadius: 900,
       // overflow: "hidden",
    },
    
    Seeds1: {
        width: 10,
        height: 15,
        position: 'absolute',
        backgroundColor: 'white',
        left: 100,
        top: 150,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        transform: [{ rotate: "-20deg" }],
    },
   
    Seeds2: {
        width: 10,
        height: 15,
        position: 'absolute',
        backgroundColor: 'white',
        left: 100,
        top: 30,
        borderRadius: 40,
        transform: [{ rotate: "10deg" }],
      }, 
    Meat: {
        width: 100,
        height: 10,
        margin: 2,
        borderRadius: 15,
    },
    
    Cheese: {
        width: 100,
        height: 4.5,
        margin: 2,
        borderRadius: 20,
    },
    
    Salad: {
        width: 100,
        height: 7,
        margin: 2,
        borderRadius: 20,
    },
    
    Bacon: {
        width: 100,
        height: 3,
        margin: 2,
    }
 });