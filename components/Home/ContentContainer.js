// app/components/ContentContainer.js
// component who contain all images component CustomImage & FullscreenImage

import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import CustomImage from '../CustomImage';
import FullscreenImage from '../FullscreenImage';


export default class ContentContainer extends React.Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.col1}>
                    <CustomImage header='Pull & sweats' imageSource={require('../../img/Pull&sweats.jpg')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.col1}>
                    <CustomImage header='Robes' imageSource={require('../../img/Robes.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.col1}>
                    <CustomImage header='Vestes & Manteaux' imageSource={require('../../img/Veste&Manteaux.jpg')}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.contentBanner}> 
                    <FullscreenImage contentText='LOOKBOOK' fullImageSource={require('../../img/lookbook.jpg')}/>
                </TouchableOpacity>
            </View> 
        );
    }
}
 
const styles = StyleSheet.create({
    contentContainer: { flex: 1, padding: 5 },
    col1: { width: '100%', padding: 5 },
    contentBanner: { width: Dimensions.get('window').width, height: Dimensions.get('window').height }
});
