// Components/FilmItem.js

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class ProductList extends React.Component {

    img_url_http = 'http://192.168.10.74/presta_api_ssl/';  

    constructor(props) {
        super(props);
        //this.state = { product: [] }
    }

    render() {

        //console.log(this.props);   
        const { product, displayDetailForOneProduct } = this.props // ES6 code <=> const product = this.props.product; & const displayDetailForProduct = this.props.displayDetailForProduct

        return (
            // "onPress" n'existe pas sur le component View ni même "onClick", "onTouch" ... Il n'y a aucun moyen de récupérer un évènement sur un component View.
            // En react native on utilise TouchableOpacity
            <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForOneProduct(product.id)}> 
            {/*source={{uri: getImageFromApi(product.poster_path)}}*/}
                {/*<Image style={styles.image} source={{uri:'http://192.168.10.11/presta_api_ssl/2-medium_default/hummingbird-printed-t-shirt.jpg'}} /> */}
                <Image style={styles.image} source={{uri: this.img_url_http + product.id_default_image + '-large_default/' + product.link_rewrite + '.jpg'}} />

                <View style={styles.content_container}>

                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{product.name}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{product.description}</Text>   
                    </View>
                {/*numberOfLines={6}*/}
                {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}       
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: { height: 190, flexDirection: 'row' },
    image: { width: 120, height: 180, margin: 5, backgroundColor: 'transparent' },
    content_container: { flex: 1, margin: 5 },
    header_container: { flex: 3, flexDirection: 'row' },
    title_text: { fontWeight: 'bold', fontSize: 20, flex: 1, flexWrap: 'wrap', paddingRight: 5 },
    price: { fontWeight: 'bold', fontSize: 26, color: '#666666' },
    description_container: { flex: 7 },
    description_text: { fontStyle: 'italic', color: '#666666' },
})

export default ProductList;