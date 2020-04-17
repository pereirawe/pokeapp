import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
                <img
                    src={ process.env.PUBLIC_URL + '/images/logo.png'}
                    alt="logo"
                    height="120px"
                />
                <Link to='/pokemones'>
                    Ver Pokemones
                </Link>
                
            </header>
        </div>
    )
}

export default Home;