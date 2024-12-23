import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add logic to handle form submission here
    };

    return (
        <>
            <div>
                {/* Modal implementation */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close modal button */}
                            <button
                                type="button"
                                onClick={() => document.getElementById('my_modal_3').close()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </button>

                            <h3 className="font-bold text-lg">Login</h3>
                            <div className="flex flex-col gap-10 mt-6">
                                {/* Email Field */}
                                <div>
                                    <label className="block">Email</label>
                                    <input
                                        type="email"
                                        {...register('email', { required: 'Email is required' })}
                                        className="block w-80 rounded-sm bg-slate-300 mt-2 mx-2 py-1 px-1"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">{errors.email.message}</span>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block">Password</label>
                                    <input
                                        type="password"
                                        autoComplete="current-password"
                                        {...register('password', { required: 'Password is required' })}
                                        className="block mx-2 py-1 w-80 rounded-sm bg-slate-300 mt-2 px-1"
                                    />
                                    {errors.password && (
                                        <span className="text-red-500">{errors.password.message}</span>
                                    )}
                                </div>
                            </div>

                            {/* Login and Sign Up Actions */}
                            <div className="flex flex-row items-baseline justify-between mt-7">
                                <button
                                    type="submit"
                                    className="bg-pink-400 text-white hover:bg-black rounded-md px-4 py-1"
                                >
                                    Login
                                </button>
                                <p>
                                    Not registered?{' '}
                                    <Link to="/signup" className="underline text-blue-500 italic">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
