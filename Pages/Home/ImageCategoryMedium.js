// app/components/CustomImage.js

import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class ImageCategoryMedium extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.image} source={this.props.imageSource}>
                <ImageOverlay paragraph={this.props.paragraph} />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: { width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }
});
