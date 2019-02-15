// Navigation/Navigation.js

import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Home from '../Pages/Home/Home';
import ProductDetail from '../components/ProductDetail'
import SearchData from '../components/SearchData'


const SearchStackNavigator = createStackNavigator({

    Home: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Home,
            navigationOptions: {
            title: '' 
        } 
    },


    SearchData: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
            screen: SearchData,
            navigationOptions: {
                title: ''  
        } 
    },

    
    ProductDetail: { 
        screen: ProductDetail
    },

})

export default createAppContainer(SearchStackNavigator);