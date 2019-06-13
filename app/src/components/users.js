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
        const endpoint = 'http://localhost:4000/api/users';
        const token = localStorage.getItem('jwt');
        const options = {
            headers: {
                authorization: token
            }
        }
        axios.get(endpoint, options)
        .then(res => {
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log(err.response)
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
                <Button onClick={this.logout} className='button'>Logout</Button>
                <ul>
                    {this.state.users.map(user => {
                return <div key={Math.random()}>
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
