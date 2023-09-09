"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const dashboard = () => {
    const router = useRouter();
    const [data, setData] = React.useState("nothing");
    const [token, setToken] = React.useState("");

    const logout = async () => {
        try {
            await axios.get("/api/logout");
            router.push("/login");
        } catch (error) {
            console.log(error.messafge);
        }
    };

    React.useEffect(() => {
        const emailToken = Cookies.get("token");
        console.log("emailToken", emailToken);
        if (emailToken) {
            setToken(emailToken);
        }
    }, []);


    return (
        <main className='container flex flex-col justify-center items-center'>
            <div class='relative flex mb-4 flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white'>
                <div class='max-w-xl px-5 text-center'>
                    <h2 class='mb-2 text-[42px] font-bold text-zinc-800'>
                        Check your inbox
                    </h2>
                    <p class='mb-2 text-lg text-zinc-500'>
                        We are glad, that you’re with us ? We’ve sent you a
                        verification link to the email address{" "}
                        <span class='font-medium text-sky-300'>
                            {token}gg
                        </span>
                        .
                    </p>
                    <a
                        href='https://gmail.com'
                        class='mt-3 inline-block w-96 rounded bg-sky-400 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700'>
                        Open the App →
                    </a>
                </div>
            </div>

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
