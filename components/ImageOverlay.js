// app/components/ImageOverlay.js
    
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ImageOverlay extends React.Component {
    render() {
        let header = this.props.header ? <Text style={styles.overlayHeader}>{this.props.header}</Text> : null;
        let paragraph = this.props.paragraph ? <Text style={styles.overlaytext}>{this.props.paragraph}</Text> : null;
        let contentText = this.props.contentText ? <Text style={styles.overlaytext}>{this.props.contentText}</Text> : null;

        return (
            <View>              
                {header}
                {paragraph}
                {contentText}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    overlayHeader: { shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.8, shadowRadius: 3, elevation: 1, alignSelf: 'center', fontSize: 28, color: '#000', textAlign: 'center',
                     padding: 10, backgroundColor: 'rgba(255,255,255, 0.6)', fontWeight: 'bold'
                   },
    overlaytext: { shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.6, shadowRadius: 3, elevation: 1, alignSelf: 'center', fontSize: 16, fontStyle: 'italic',
                   color: '#000', textAlign: 'center', padding: 8, marginTop: 8, backgroundColor: 'rgba(255,255,255, 0.6)' 
                 }
});
