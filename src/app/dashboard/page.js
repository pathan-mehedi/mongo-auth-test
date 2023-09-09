"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const dashboard = () => {

    const router = useRouter();
    
    const logout = async () => {
        try {
            await axios.get("/api/logout");
            router.push("/login");
        } catch (error) {
            console.log(error.messafge);
        }
    };

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
                <button
                    class='w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-teal-500
                  rounded-lg transition duration-200 hover:bg-teal-600 ease cursor-pointer'
                    onClick={logout}>
                    Logout
                </button>
            </div>
        </main>
    );
};

export default dashboard;
