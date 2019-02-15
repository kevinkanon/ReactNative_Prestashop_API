// app/components/ContentContainer.js
// HOMEPAGE
// component who contain all images component CustomImage & FullscreenImage

import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import ImageCategory from './ImageCategory';
import ImageCategoryMedium from './ImageCategoryMedium';
import FullscreenImage from './FullscreenImage';
import FirstHomeCarousel from './FirstHomeCarousel';



 
export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props);
        return ( 
            <ScrollView style={styles.contentContainer}>
            {/* frist big carousel on the homepage*/}
                <View>
                    <FirstHomeCarousel />
                </View> 

                {/* ImageCategory width 100% of the home screen*/}
                <TouchableOpacity style={styles.col1}>
                    <ImageCategory header='Pull & sweats' imageSource={require('../../img/Pull&sweats.jpg')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.col1}>
                    <ImageCategory header='Robes' imageSource={require('../../img/Robes.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.col1}>
                    <ImageCategory header='Vestes & Manteaux' imageSource={require('../../img/Veste&Manteaux.jpg')}/>
                </TouchableOpacity>

                {/* ImageCategoryMedium width 0% of the home screen*/}
                <View style={styles.mediumImageContainer}>
                    <TouchableOpacity style={styles.col2}>
                        <ImageCategoryMedium paragraph='Vestes & Manteaux' imageSource={require('../../img/Veste&Manteaux.jpg')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.col2}>
                        <ImageCategoryMedium paragraph='Vestes & Manteaux' imageSource={require('../../img/Veste&Manteaux.jpg')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.col2}>
                        <ImageCategoryMedium paragraph='Robes' imageSource={require('../../img/Robes.jpg')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.col2}>
                        <ImageCategoryMedium paragraph='Robes' imageSource={require('../../img/Robes.jpg')}/>
                    </TouchableOpacity>
                </View>    

                <TouchableOpacity style={styles.contentBanner}> 
                    <FullscreenImage contentText='LOOKBOOK' fullImageSource={require('../../img/lookbook.jpg')}/>
                </TouchableOpacity>
   
            </ScrollView> 
                   
        ); 
    }
}
 
const styles = StyleSheet.create({
    contentContainer: { flex: 1},
    mediumImageContainer: { flex: 1, flexDirection: 'row', flexWrap: 'wrap'},
    col1: { width: '100%', padding: 5 },
    col2: { width: '50%', padding: 2 },
    contentBanner: { width: Dimensions.get('window').width, height: Dimensions.get('window').height }
});
