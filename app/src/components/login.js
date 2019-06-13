import React from 'react';
import axios from 'axios';
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
        axios.post('', this.state)
        .then()
        .catch()
    }   

    render() {
        return (
            <form onSubmit={this.callLogin} className='form'>
                <TextField id='username' label='Name'  className='textField' onChange={this.handleChanges} />
                <TextField id='password' label='Password' className='textField' onChange={this.handleChanges} />
                <Button onClick={this.callLogin}>Login</Button>
            </form>
        )
    }

}

export default Login;