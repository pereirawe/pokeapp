import React, { Component, Fragment } from 'react';
import List from '../components/List';
import axios from 'axios';
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

class PokeListContainer extends Component{

    state = {
        pokeData : []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res =>{
            const pokeData = res.data.results;

            this.setState({
                pokeData
            })

        })
        .catch(error =>{
            console.log(error)
        })
    }

    render(){
        const { classes } = this.props;
        const { pokeData } = this.state;
        
        return(
            <Fragment>
                <AppBar class={classes.NavColor} position="static" >
                    <Toolbar variant="dense">
                        <Typography>
                            <Link to='./'>
                                PokeApp
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List pokedata={ pokeData } />
            </Fragment>
        )
    }
}

export default withStyles({
    NavColor:{
        backgroundColor : '#EF5350'
    }
}) (PokeListContainer);