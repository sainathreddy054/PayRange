import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../HeaderComponent/Header'
import './LoginComponent.css'

class LoginComponent extends Component {
    state = {
        email: '',
        password: '',
        errors: ''
    }
    submitForm = () => {
        const { email, password } = this.state
        const errors = this.validateFields(email, password)
        if (errors.length > 0) {
            this.setState({ errors })
            return;
        }
        this.props.history.push('/machines')
    }

    validateFields = (email, password) => {
        const errors = []
        if (email.length === 0 || !this.validateEmail(email)) errors.push('Please enter valid email address')
        if (password.length === 0) errors.push('Please enter the Password')
        return errors
    }

    validateEmail = email => {
        return /^[^\$@]+@[^\$@]+\.[^\$@]+$/.test(email)
    }

    render() {
        const { email, password, errors } = this.state
        return (
            <div className='login-screen'>
                <Header displayText='Welcome' />
                <h3> Login </h3>
                {errors && errors.map(error => {
                    return <p className='error-msg' key={error}> {error} </p>
                })}
                <div className='login-form'>
                    <input
                        type='text'
                        placeholder=' Email'
                        name='email'
                        value={email}
                        onChange={e => this.setState({ email: e.target.value, errors: '' })}
                    />
                    <input
                        type='password'
                        placeholder=' Password'
                        name='password'
                        value={password}
                        onChange={e => this.setState({ password: e.target.value, errors: '' })}
                    />
                    <button className='login-button' onClick={() => this.submitForm()}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginComponent)