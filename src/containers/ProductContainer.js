import React, {Component} from 'react';
import axios from "axios";

class ProductContainer extends Component{
    componentDidMount(){
        // axios.get("https://pokeapi.co/api/v2/pokemon/ditto/")
        axios.get("https://revanca.com/API/ven/products/01010005/")
        .then(result=>{
            console.log(result.data)
            // return result.data
        })
        .catch(
            error => console.log(error)
        )
    }

    render(){
        return(
            <div>
                <h1>PokeWilliam</h1>
            </div>
        )
    }

}

export default ProductContainer;