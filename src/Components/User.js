import axios from "axios";
import React from "react";


export default class User extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        user: []
    }
    state ={
        a:[]
    }
    componentDidMount(){
        axios.get("http://localhost:9090/loginController/getUser/"+this.props.id)
        .then(r=>{
            this.setState({user: r.data});
            const a=r.data;
        });
    }
    

    render(){
        return(
                this.state.user.password
        )
    }
}