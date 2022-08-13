import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="my-10">
            <div className="border border-gray-300 w-6/12 lg:w-4/12 mx-auto pt-3 rounded-md">
                <h2 className="text-4xl text-info font-bold text-center mb-5">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div >
                        <label className="my-2 text-xl pl-3" htmlFor="email">Email</label>
                        <input className="mt-2 w-full border border-gray-200 pl-3 py-1 outline-0 text-gray-400 text-xl" onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="mt-2">
                        <label className="my-2 text-xl pl-3" htmlFor="password">Password</label>
                        <input className="mt-2 w-full border border-gray-200 pl-3 py-1 outline-0 text-gray-400 text-xl" onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>
                    </div>
                    <div className="mt-2">
                        <label className="my-2 text-xl pl-3" htmlFor="confirm-password">Confirm Password</label>
                        <input className="mt-2 w-full border border-gray-200 pl-3 py-1 outline-0 text-gray-400 text-xl" onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className="text-xl cursor-pointer text-center font-bold text-info py-2 fob bg-slate-200 block w-full px-0" type="submit" value="Sign Up"  required/>
                </form>
                <p className="my-3 text-xl">
                    Already Have an account? <Link className="text-green-500" to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;