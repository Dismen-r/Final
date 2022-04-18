import React from "react";
import Itemcart from "./Itemcart";
import ProductService from "./ProductService";
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((response) => {
            this.setState({ users: response.data })
            console.log(response.data.productName);
        });
    }
    render() {
        console.log(this.state.users);

        return (
            this.state.users.map((item, index) => {
                return (
                    <Itemcart
                        item={item}
                        key={index}
                    />

                )

            })

        )
    }
}
export default Product;