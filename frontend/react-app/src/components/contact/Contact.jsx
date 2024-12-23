import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Thank you for reaching out! We will get back to you shortly.');
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="relative border px-6 py-6 shadow-lg rounded-lg bg-white max-w-md w-full mt-10">
                    {/* Form Content */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-center text-2xl mb-6">
                            Contact Us
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
                                    {...register("email", { 
                                        required: "Email is required", 
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="block w-full rounded-sm bg-slate-200 mt-2 px-3 py-2"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows="4"
                                    className="block w-full rounded-sm bg-slate-200 mt-2 px-3 py-2 max-h-32 overflow-y-auto"
                                ></textarea>
                                {errors.message && (
                                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-pink-400 text-white hover:bg-black rounded-md px-4 py-2 "
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
