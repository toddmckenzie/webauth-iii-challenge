import React from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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

    callLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state)
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
                
            </form>
        )
    }

}

export default Register;

                // <input value={this.state.name} name='name' placeholder='name' onChange={this.handleChanges} />
                // <input value={this.state.password} name='password' placeholder='password' onChange={this.handleChanges} />
                // <input value={this.state.department} name='department' placeholder='department' onChange={this.handleChanges} />