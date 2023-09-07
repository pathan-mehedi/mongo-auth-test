"use client";

import { registerNewUser } from "@/services/signup";
import React from "react";

const isRegistered = false;

const initalFormData = {
    email: "",
    password: "",
};

const signup = () => {
    const [formData, setFormData] = React.useState(initalFormData);

    console.log(formData);

    function isFormValid() {
      return formData.email.length > 0 && formData.password.length > 0;
    }
    console.log(isFormValid());

    async function handleSubmit(e) {
        const data = await registerNewUser(formData);
        console.log(data);
        e.preventDefault();
        console.log("Form Submitted");
    }

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
                                    Signup Now
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
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                            value={formData.email}
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
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    password: e.target.value,
                                                })
                                            }
                                            value={formData.password}
                                            class='border placeholder-gray-400 focus:outline-none
                focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                border-gray-300 rounded-md'
                                        />
                                    </div>
                                    <button
                                        class='disabled:opacity-50 disabled:cursor-not-allowed w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-teal-600
                rounded-lg transition duration-200 hover:bg-teal-700 ease cursor-pointer'
                                        disabled={!isFormValid()}
                                        onClick={handleSubmit}>
                                        Signup
                                    </button>
                                    <div class='relative'>
                                        <a
                                            href='/login'
                                            type='button'
                                            class='bg-white pt-0 pr-2 pb-0 -mt-1 mr-0 mb-0 font-medium text-sky-300 capitalize text-center block'>
                                            Already a Member
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* her is the SVG goes */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default signup;
