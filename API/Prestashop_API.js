// API/Prestashop_API.js

const BASE_URL = 'http://192.168.10.11:80/presta_api_ssl/api/';
const API_TOKEN = 'TTMSQZ9ABRD2989CRRC7U2E41LZQ3V9F';
const URL_ADDONS = 'output_format=JSON&display=full';

/* get all product from the Webservice  */
export function getProductsFromApi() {
    //const url = BASE_URL + 'products?ws_key=' + API_TOKEN + url_addons
    const url =  BASE_URL + 'products/?ws_key=' + API_TOKEN + '&' + URL_ADDONS; 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// API/TMDBApi.js
export function getImageFromApi () {
    return "http://192.168.10.11:80/presta_api_ssl/api/images/products/"+item.id+"/"+item.id_default_image+"/?ws_key=TTMSQZ9ABRD2989CRRC7U2E41LZQ3V9F";
}

//"http://192.168.10.11:80/berenice/api/images/products/"+item.id+"/"+item.id_default_image+"/?ws_key=6JPMY3JZKBAA1JBW9GE5Q9XE73M3IDIJ"; 
/*
const url =  'http://192.168.10.174:80/presta_api_ssl/api/products/?ws_key=TTMSQZ9ABRD2989CRRC7U2E41LZQ3V9F&output_format=JSON&display=full'; 
    //const url = 'http://192.168.10.174:80/presta_api_ssl/api/products/4?ws_key=TTMSQZ9ABRD2989CRRC7U2E41LZQ3V9F&output_format=JSON'; 
    //const url = 'http://192.168.10.174:80/presta_api_ssl/produit-4.json'; 
    //const url = 'http://192.168.10.174:80/presta_api_ssl/produits-full.json';    
    return fetch(url)
    .then( response => response.json()) 
    .then( (responseJson) => {return this.setState( { isLoading: false, dataSource: responseJson.products} ) } )
    .catch( error => console.error(error))  
*/
