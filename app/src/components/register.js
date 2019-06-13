import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        const endpoint = 'http://localhost:4000/api/register';
        axios.post(endpoint, this.state)
        .then(res => {
            this.props.history.push('/login')
        })
        .catch(err => {
            console.log(err.reponse)
        })
    }   

    render() {
        return (
            <div>
                <Link to='/login'>
                    <Button>Login</Button>
                </Link>
                <form onSubmit={this.register} className='form'>
                    <TextField id='username' label='Name'  className='textField' onChange={this.handleChanges} />
                    <TextField id='password' label='Password' className='textField' onChange={this.handleChanges} type='password'/>
                    <TextField id='department' label='Department' className='textField' onChange={this.handleChanges} />
                    <Button onClick={this.register}>Register</Button>
                </form>
            </div>
        )
    }

}

export default Register;

