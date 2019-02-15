// Header of the application == static on all page of the application

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Banner extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.cart} source={require('../img/robe-alana.jpg')}/>
                <Text style={styles.logo}>Berenice</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  header: { height: 80, marginTop: 20, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 20, borderBottomWidth: 4, borderBottomColor: '#CCC' }, 
  cart: { width: 40, height: 40 },
  logo: { fontSize: 23, marginLeft: 10, fontStyle: 'italic', color: '#292929'}
});
