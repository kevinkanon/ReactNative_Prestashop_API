import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';

import { getProductsFromApi } from '../API/Prestashop_API'; 
import ProductList from './ProductList';

class SearchData extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, dataSource: [] }
    }

    /*
        is invoked immediately after a component is mounted render() - If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
        This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
    */
    componentDidMount() {    
        /* API request to get products from prestashop */
        getProductsFromApi().then(data => {
            this.setState( { isLoading: false, dataSource: data.products});
            //console.log(this.state.dataSource);
        })
    }

    /*_displayDetailForProduct = (idFilm) => {
        console.log("Display film " + idFilm)
        // On a récupéré les informations de la navigation, on peut afficher le détail du film
        this.props.navigation.navigate('ProductDetail', {idFilm: idFilm})
    }*/
    
    /*  Activity Indicator for experience user  */
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' /> 
                </View> 
            )
        } 
    }

    

    _displayDetailForOneProduct = (idProduct) => {
        //console.log("Display film with id " + idProduct)
        this.props.navigation.navigate("ProductDetail", { idProduct: idProduct })
    }

    render() {
        //console.log(this.props);
        return (  
            <View style={styles.main_container}>
                <FlatList 
                    data={this.state.dataSource} 
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({item}) => ( <ProductList product={item} displayDetailForOneProduct={this._displayDetailForOneProduct}/> )}
                />

                {this._displayLoading()}   
            </View>
        );
    }


}

const styles = StyleSheet.create({
    main_container: { flex: 1 },
});

export default SearchData;




