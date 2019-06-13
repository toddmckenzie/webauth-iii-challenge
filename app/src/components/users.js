import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Users extends React.Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get()
        .then()
        .catch()
    }

    logout = (e) => {
        axios.get()
        .then()
        .catch()
    } 
   

    render() {
        return (
            <Button onClick={this.logout}>Logout</Button>
        )
    }

}

export default Users;
