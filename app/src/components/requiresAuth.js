import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('jwt');

axios.interceptors.request.use(config => {
    config.headers.authorization = token;
    return config;
}, function (error) {
    return Promise.reject(error)
})


export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const notLoggedIn = <div>You need to Login</div>

            return (
                 <div>{token ? <Component {...this.props} /> : notLoggedIn }</div>
            );
             
            
        };
    }
}