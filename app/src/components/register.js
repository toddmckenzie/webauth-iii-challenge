import React from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './components.css'

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            department: ''
        }
    }

    handleChanges = (e) => {
        e.preventDefault();
        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.state.department)
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/register', this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }   

    render() {
        return (
            <form onSubmit={this.callLogin} className='form'>
                <TextField id='username' label='Name'  className='textField' onChange={this.handleChanges} />
                <TextField id='password' label='Password' className='textField' onChange={this.handleChanges} />
                <TextField id='department' label='Department' className='textField' onChange={this.handleChanges} />
                <Button onClick={this.register}>Register</Button>
            </form>
        )
    }

}

export default Register;

