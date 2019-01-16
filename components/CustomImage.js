// app/components/CustomImage.js

import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class CustomImage extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.image} source={this.props.imageSource}>
                <ImageOverlay header={this.props.header} />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: { width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }
});
