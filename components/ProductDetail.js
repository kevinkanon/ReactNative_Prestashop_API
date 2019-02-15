// Components/ProductDetail.js

import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getOneProductFromApi } from '../API/Prestashop_API';
//import moment from 'moment';        //  libraririe pour formater la date
//import numeral from 'numeral';      //  librairie js pour mabipuler et formater les numbers
//import { connect } from 'react-redux'; // sert à connecter le store à notre component ProductDetail.
  
class ProductDetail extends React.Component {

    img_url_http = 'http://192.168.10.74/presta_api_ssl/';  
    
    constructor(props) {
        super(props);
        this.state = {
            product: {}, // Pour l'instant on n'a pas les infos du product, on initialise donc le product à undefined.
            isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du product
        }
    }

    // componentDidMount est lancé dans le cycle de vie après le render() on est donc sur que notre appel API est faite après le render du component.
    componentDidMount() {
        getOneProductFromApi(this.props.navigation.state.params.idProduct).then(data => {
            this.setState({ product: data, isLoading: false })
          })
    }

    _displayLoading() {
        if (this.state.isLoading) { // Si isLoading vaut true, on affiche le chargement à l'écran
          return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    // Display product if he is !undefined
    _displayProduct() {
    const { product } = this.state.product
    //console.log(product)
        if (product) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Image
                        style={styles.image}
                        source={{uri: this.img_url_http + product.id_default_image + '-large_default/' + product.link_rewrite + '.jpg'}}
                    />
                    <Text style={styles.title_text}>{product.name}</Text>
                    <Text style={styles.description_text}>{product.description}</Text>
                </ScrollView>
            )
        }
    }

    render() {
        //console.log(this.props.navigation)
        return (
            <ScrollView style={styles.main_container}>
                {/*<Text>Détail du product {this.props.navigation.state.params.idProduct}</Text>*/}
                {this._displayLoading()}
                {this._displayProduct()}
            </ScrollView>
            )
        }
    }

const styles = StyleSheet.create({
    main_container: { flex: 1 },
    loading_container: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' },
    scrollview_container: { flex: 1 },
    image: { height: 400, margin: 5 },
    title_text: { fontWeight: 'bold', fontSize: 35, flex: 1, flexWrap: 'wrap', marginLeft: 5, marginRight: 5, marginTop: 10, marginBottom: 10, color: '#000000', textAlign: 'center' },
    description_text: { fontStyle: 'italic', color: '#666666', margin: 5,  marginBottom: 15 },
    default_text: { marginLeft: 5, marginRight: 5, marginTop: 5, },
    favorite_container: { alignItems: 'center' },
    favorite_image: { width: 40, height: 40 }
})


export default ProductDetail;
