// components/Search.js

import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchedText: "" }
    }
    
    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }

    _loadSearchedProduct() {
        console.log(this.state.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
        if (this.state.searchedText.length > 0) { 
            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
            this.setState({ films: data.results })
          })
        }
    }
    
    render() {
        console.log(this.state.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput}
                        placeholder='Nom du produit'
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button style={styles.button} title='Rechercher' onPress={() => this._loadSearchedProduct()}/>          
            </View>
        )
    }


}

const styles = StyleSheet.create({
    main_container: { flex: 1, marginTop: 0, marginBottom: 55 },
    textinput: { marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 },
    button: { height: 50 }
})

export default Search;