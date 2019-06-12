import react from 'react';

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
            [e.target.name]: e.target.value
        })
    }

    callLogin = (e) => {
        e.preventDefault();
        axios.post('')
        .then()
        .catch()
    }   

    render() {
        return (
            
        )
    }

}

export default Login;