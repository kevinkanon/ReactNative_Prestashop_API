import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Banner from './components/Banner';
import Home from './Pages/Home/Home';
import SearchData from './components/SearchData';
import Search from './components/Search';
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
    render() {
        return (
            
        <Navigation/>
        
        //<View style={styles.container}>
            //<Banner />
            //<Search />
        
            //<ScrollView> 
                //<Home />
                //<SearchData /> 
            //</ScrollView>
        //</View> 

        );
    }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
});
