import React from 'react';
import { Link } from 'react-router-dom'

const List = () => {
    return(
        <div>
            <h2>Lista de Pokemones</h2>
            <Link to='../'>
                Home
            </Link>
        </div>
    )
}

export default List;