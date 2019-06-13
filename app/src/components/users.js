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
        const endpoint = 'http://localhost:4000/api/users'
        axios.get(endpoint)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        this.history.props.push('/login')
    } 
   

    render() {
        return (
            <Button onClick={this.logout}>Logout</Button>
        )
    }

}

export default Users;
