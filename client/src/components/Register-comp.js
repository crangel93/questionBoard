import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function RegisterComp() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    const endpoint =
        process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'

    useEffect(() => {
        console.log("===jared endpoint", endpoint);
    }, [])
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        // use try/catch instead of promises to handle errors
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className='flex-row justify-center mb-4'>
            <center>
                <div className='col-12 col-md-6'>
                    <div className='card'>
                        <h4 className='card-header'>Sign Up</h4>
                        <div className='card-body'>
                            <form className='' onSubmit={handleFormSubmit}>
                                <input
                                    className='form-input'
                                    placeholder='Your username'
                                    name='username'
                                    type='username'
                                    id='username'
                                    value={formState.username}
                                    onChange={handleChange}
                                />
                                <input
                                    className='form-input'
                                    placeholder='Your email'
                                    name='email'
                                    type='email'
                                    id='email'
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className='form-input'
                                    placeholder='******'
                                    name='password'
                                    type='password'
                                    id='password'
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button className='btn d-block w-100' type='submit'>
                                    Submit
                                </button>
                            </form>
                            {error && <div>Sign up failed</div>}
                        </div>
                    </div>
                </div>
            </center>
        </main>
    )
}

export default RegisterComp