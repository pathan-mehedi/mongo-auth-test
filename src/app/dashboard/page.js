'use client';

import Cookies from "js-cookie";
import React from "react";

const dashboard = () => {

    function DeleteUserCookie() {
        Cookies.remove("token");
        Cookies.remove("email");
        window.location.href = "/login";
    }

    return (
        <main className='container flex flex-col justify-center items-center'>
            <div className='welcome_container dflex'>
                <h1 className='hero_title'>Welcome to Dashboard</h1>
                <p className='hero_sec_desc'>
                    Discover a world of possibilities and information. We are
                    <br />
                    here to provide you with the latest updates and insights.
                </p>
                <div className='btn_wrapper dflex mt-10'></div>
                <button class='w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-teal-500
                  rounded-lg transition duration-200 hover:bg-teal-600 ease cursor-pointer'
                  onClick={DeleteUserCookie}
                  >
                    Logout
                </button>
            </div>
        </main>
    );
};

export default dashboard;
