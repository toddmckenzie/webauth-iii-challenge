import React from 'react';
import axios from 'axios';

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
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
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
            <form onSubmit={this.callLogin}>
                <input value={this.state.name} name='name' placeholder='name' onChange={this.handleChanges} />
                <input value={this.state.password} name='password' placeholder='password' onChange={this.handleChanges} />
                <input value={this.state.department} name='department' placeholder='department' onChange={this.handleChanges} />
            </form>
        )
    }

}

export default Register;