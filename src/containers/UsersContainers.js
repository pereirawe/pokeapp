import React, {Component} from 'react';
import UserComponent from "../components/UsersComponent";

class Users extends Component{

    state = {};
    render(){
        return <UserComponent
            name={'William'}
            country={'Venezuela'}
        />;
    }
}

export default Users;