import React, { useState } from 'react';
import login from '../images/login.png'
import Swal from 'sweetalert2'
import logo from '../images/logo.png'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-around pt-0">
            <div className='hidden md:flex w-[50vw] h-[100vh]'>
                <img src={login} alt="hi" onClick={handleSubmit} />
            </div>
            <div className='flex items-center justify-center h-[100vh] bg-white w-[50vw]'>
                <div className="max-w-md w-full space-y-8 border-1  border-gray-300 p-2 lg-[700px] shadow-xl shadow-gray-400 opacity-90">
                    <div>
                        <img className="mx-auto h-24 w-auto" src={logo} alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">Welcome to EFIR</h2>
                        <h2 className="text-center text-xl font-extrabold text-gray-700">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6 gap-2" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px gap-y-4">
                            <div className='mb-4'>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                        <button className="bg-[#AA5656] text-[#F1DBBF] font-[Poppins] py-2 px-6 rounded  hover:bg-[#F1DBBF] hover:text-[#AA5656] duration-500">
            Login
          </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}


export default Login