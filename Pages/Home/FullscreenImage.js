import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class FullscreenImage extends React.Component {
    render() {
        return (
          
            <ImageBackground style={styles.image} source={this.props.fullImageSource}>
                <ImageOverlay contentText={this.props.contentText} />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: { flex: 1 , justifyContent: "center", alignItems: "center" },
    overlaytext: { 
        shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.6, shadowRadius: 3, elevation: 1, alignSelf: 'center', fontSize: 16, fontStyle: 'italic',
        color: '#000', textAlign: 'center', padding: 8, marginTop: 8, backgroundColor: 'rgba(255,255,255, 0.6)', fontWeight: 'bold'
    }
}); 
