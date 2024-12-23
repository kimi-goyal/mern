import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="relative border px-6 py-6 shadow-lg rounded-lg bg-white max-w-md w-full">
                    {/* Close Button */}
                    <Link to="/">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                        >
                            ✕
                        </button>
                    </Link>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-center text-2xl mb-6">
                            Welcome! to Book-World
                        </h3>
                        <div className="flex flex-col gap-5">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="block w-full rounded-sm bg-slate-200 mt-2 px-3 py-2"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="block w-full rounded-sm bg-slate-200 mt-2 px-3 py-2"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    {...register("password", { required: "Password is required" })}
                                    className="block w-full rounded-sm bg-slate-200 mt-2 px-3 py-2"
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Submit and Login */}
                        <div className="flex flex-row items-center justify-between mt-6">
                            <button
                                type="submit"
                                className="bg-pink-400 text-white hover:bg-black rounded-md px-4 py-2"
                            >
                                Submit
                            </button>
                            <p className="text-sm">
                                Already registered?{' '}
                                <span
                                    className="underline text-blue-500 italic cursor-pointer"
                                    onClick={() => document.getElementById('my_modal_3').showModal()}
                                >
                                    Login
                                </span>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
