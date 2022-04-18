import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:9090/productController/viewAllProducts';
class ProductService {
    getProducts() {
        return axios.get(USERS_REST_API_URL);
    }
}
export default new ProductService;