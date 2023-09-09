"use client";

import React, { useEffect } from "react";
import { loginUser } from "@/services/login";
// import Cookies from "js-cookie";

const initialFormData = {
    email: "",
    password: "",
};

const login = () => {
    const [formData, setFormData] = React.useState(initialFormData);
    const [loading, setLoading] = React.useState(false);

    console.log(formData);

    function isValidForm() {
        return formData.email.length > 0 && formData.password.length > 0;
    }

    async function handleSubmit(e) {
        const res = await loginUser(formData);
        console.log(res);

        if (res.success) {
            setLoading(true);
            window.location.href = "/dashboard";
        } else {
            alert(res.message);
        }

        e.preventDefault();
    }

    console.log(formData);

    return (
        <main className='container'>
            <div class='bg-white relative lg:py-20'>
                <div
                    class='flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row'>
                    <div class='flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row'>
                        <div class='w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12'>
                            <div class='flex flex-col items-center justify-center w-full h-full relative lg:pr-10'>
                                <img
                                    src='https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png'
                                    class='btn-'
                                />
                            </div>
                        </div>
                        <div class='w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12'>
                            <div
                                class='flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10'>
                                <p class='w-full text-2xl font-medium text-center leading-snug font-serif capitalize'>
                                    {loading ? "Processing..." : "Login to your account"}
                                </p>
                                <div class='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                                    <div class='relative'>
                                        <p class='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>
                                            Email
                                        </p>
                                        <input
                                            placeholder='Enter Your Email'
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                            class='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                                        />
                                    </div>
                                    <div class='relative'>
                                        <p
                                            class='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'>
                                            Password
                                        </p>
                                        <input
                                            placeholder='Password'
                                            type='password'
                                            name='password'
                                            value={formData.password}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    password: e.target.value,
                                                })
                                            }
                                            class='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                                        />
                                    </div>
                                    <div class='relative'>
                                        <a
                                            href='/forgot'
                                            class='bg-white pt-0 pr-2 pb-0 -mt-3 mr-0 mb-0 font-medium text-sky-300 capitalize text-right block'>
                                            Forgot Password
                                        </a>
                                    </div>
                                    <div class='relative'>
                                        <button
                                            class='disabled:opacity-50 disabled:cursor-not-allowed w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-teal-500
                  rounded-lg transition duration-200 hover:bg-teal-600 ease cursor-pointer'
                                            disabled={!isValidForm()}
                                            onClick={handleSubmit}>
                                            Login
                                        </button>
                                    </div>
                                    <div class='relative'>
                                        <a
                                            href='/signup'
                                            class='bg-white pt-0 pr-2 pb-0 -mt-1 mr-0 mb-0 font-medium text-sky-300 capitalize text-center block'>
                                            Not a member, Signup Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* THE SVG IMAGE GOES HERE */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default login;
