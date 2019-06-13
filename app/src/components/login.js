import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './components.css'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    callLogin = (e) => {
        e.preventDefault();
        const endpoint = 'http://localhost:4000/api/login'
        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            this.props.history.push('/users')
        })
        .catch(err => {
            console.log(Error)
        })
    }   

    render() {
        return (
            <div>
                <Link to='/register'>
                    <Button>Register</Button>
                </Link>
                <h1 className='header'>Please Log In</h1>
                <form onSubmit={this.callLogin} className='form'>
                    <TextField id='username' label='Name'  className='textField' onChange={this.handleChanges} />
                    <TextField id='password' label='Password' className='textField' onChange={this.handleChanges} type='password' />
                    <Button onClick={this.callLogin}>Login</Button>
                </form>
            </div>
        )
    }

}

export default Login;