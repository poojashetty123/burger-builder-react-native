/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Layout from './android/app/src/components/Layout/Layout';
import BurgerBuilder from './android/app/src/container/BurgerBuilder/BurgerBuilder';
import {ScrollView} from 'react-native';
import {Router, Switch, Route} from 'react-router-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component {
  render()
  {
    return(
         <ScrollView>
              <Layout>
                    <BurgerBuilder />
              </Layout>
      </ScrollView>
     
     
  
    );
  }
 
}





export default App;
