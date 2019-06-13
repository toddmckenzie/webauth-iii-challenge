import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Users extends React.Component {
    constructor(props){
        super(props);
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
        this.props.history.push('/login')
    } 
   

    render() {
        return (
            <div>
                <Button onClick={this.logout}>Logout</Button>
                <ul>
                    {this.state.users.map(user => {
                return <div>
                            <li>{user.username}</li>
                            <li>{user.department}</li>
                        </div>
                       
                    })}
                </ul>
            </div>
        )
    }

}

export default Users;
