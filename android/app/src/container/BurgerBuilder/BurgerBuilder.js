import React, { Component } from 'react';
import Aux from '../../hoc/Auxfile';
import { View, Text } from 'react-native';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//import Spinner from '../../components/UI/Spinner/Spinner';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
//import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 60,
    bacon: 70
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }
    
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount=oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler= (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount=oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState( { purchasing: true } );
    }
    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }
    // cartHandler = () => {
    //     let burgerId = this.props.cartCount + 1;

    //     let productData = {
    //         totalCost: this.props.price,
    //         product: {
    //             id: "brugermkr_" + burgerId,
    //             name: "Burger No: " + burgerId,
    //             ingredients: {
    //                 ...this.props.ings
    //             },
    //             price: this.props.price,
    //             quantity: 1,
    //             inCart: true
    //         }
    //     };

    //     this.props.onAddCart(productData);
    // }

    render()
    {
        // console.log(this.props.currentCart);

        const disabedInfo = {
            ...this.state.ingredients
        };
        for (let key in disabedInfo) {
            disabedInfo[key] = disabedInfo[key] <= 0
        }
        return(
        <Aux>
                {/* <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   <OrderSummary ingredients={this.state.ingredients} />
               </Modal>  */}
              <Burger ingredients={this.state.ingredients} />
              <BuildControls 
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabedInfo}
              purchasable={this.state.purchasable}
              ordered={this.purchaseHandler}
              price={this.state.totalPrice}
              //addToCart={this.cartHandler} 
              />
        </Aux>
        );
    }
}
// const mapStateToProps = state => {
//     return {
//         ings: state.burgerBuilder.ingredients,
//         price: state.burgerBuilder.totalPrice,
//         // error: state.burgerBuilder.error,
//         cartCount: state.cart.cartCount,
//         currentCart: state.cart
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
//         // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
//         // onInitIngredients: () => dispatch(actions.initIngredients()),
//         //onInitPurchase: () => dispatch(actions.purchaseInit()),
//         onAddCart: (product) => dispatch(actions.addBasket(product))
//     }
// }
   
export default BurgerBuilder;
