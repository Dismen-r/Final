import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/orderController/viewAllOrder";

class OrderService {

    getOrder(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}

export default new OrderService()