import React from 'react'

const UserComponent = props =>{
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
        </div>
    )
}

export default UserComponent;