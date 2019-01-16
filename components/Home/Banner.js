// component who contain the banner on homepage  

import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';

import FullscreenImage from '../FullscreenImage';


export default class Banner extends React.Component {
    
    render() {
        
        
        return (
            <TouchableOpacity style={styles.banner}> 
                <FullscreenImage contentText='CAROUSEL' fullImageSource={require('../../img/carousel_home.jpg')}/>
            </TouchableOpacity>
        );
    }
}

/*  display an element on full screen  and add  padding value ex:5   */
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').width;
/*  display an element on full screen  and add  padding value ex:5   */

const styles = StyleSheet.create({
    banner: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
}); 
