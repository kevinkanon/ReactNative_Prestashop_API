import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from './components/Header';
import Banner from './components/Home/Banner';
import ContentContainer from './components/Home/ContentContainer';
import SearchData from './components//SearchData';

export default class App extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <Header />
            
                <ScrollView>
                    <Banner />
                    <ContentContainer />
                    <SearchData /> 
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
