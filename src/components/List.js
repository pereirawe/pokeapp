import React, {Fragment} from 'react';

function List( {pokedata} ) {
    return(
        <Fragment>
            <h2>Lista de Pokemones</h2>
            <ul>
                { pokedata.map( (pokemon, index) => {
                    return (
                        <li key={index}>
                            {pokemon.name} - <a href={pokemon.url}>URL</a> 
                            <pre></pre>
                        </li>
                    )
                }) }
            </ul>
        </Fragment>
    )
}

export default List;