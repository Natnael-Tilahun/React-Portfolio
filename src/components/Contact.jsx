import React, { useState } from "react";

function Contact() {
    const text_balck_700_light = "504e70";
    return (
        <section
            id="contact"
            className=" overflow-y-scroll flex flex-col text-xl px-0 md:px-12 py-10 dark:text-[#f2f2fc]"
        >
            <div className="px-8">
                       <h1 className="text-4xl font-bold w-60 ">Contact Me</h1>
            <hr className="border-2 border-red-500 h-1 w-28 rounded-lg" />
            <hr className="border-2 border-red-500 h-1 w-16 mt-1 rounded-lg" />
            <hr className="border-2 border-red-500 h-1 w-8 my-1 rounded-lg" />
            </div>
     
            <div className=" p-10 flex flex-col gap-10">
                <h1 className="text-center text-3xl text-red-500 pb-5 ">Have you any questions?</h1>
                <div className="flex flex-col gap-10 md:flex-row flex-wrap">
                    <div className="basis-1/2 md:basis-1/5 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" className="fill-red-500">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
                        </svg>
                        <h1 className="font-bold text-lg">Call Me On</h1>
                        <h1 className="text-base text-gray-400">+251 933654654</h1>
                    </div>

                    <a href="mailto:natnaeltilahun97@gmail.com" target="_blank" className="basis-1/2 md:basis-1/5 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" className="fill-red-500">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                        </svg>
                        <h1 className="font-bold text-lg">Email</h1>
                        <h1 className="text-base text-gray-400">natnaeltilahun97@gmail.com</h1>
                    </a>

                    <a href="https://www.linkedin.com/in/natnael-tilahun/" target="_blank" className="basis-1/2 md:basis-1/5 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" className="fill-red-500">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                        </svg>
                        <h1 className="font-bold text-lg">LinkedIn</h1>
                        <h1 className="text-base text-gray-400">Natnael-Tilahun</h1>
                    </a>

                    <a href="https://github.com/Natnael-Tilahun" target="_blank" className="basis-1/2 md:basis-1/5 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" className="fill-red-500">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                        </svg>
                        <h1 className="font-bold text-lg">Github</h1>
                        <h1 className="text-base text-gray-400">Natnael-Tilahun</h1>
                    </a>

                </div>
                <div className="flex flex-col items-center py-3">
                    <h1 className="text-center text-3xl text-red-500 py-3 text-center">SEND ME AN EMAIL</h1>
                    <h1 className="text-lg dark:text-gray-300 text-clip">I'M VERY RESPONSIVE TO MESSAGES</h1>
                    <div className="flex flex-wrap justify-center gap-5 py-9">
                        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                            <input type="text" name="name" className="w-full md:w-1/2 rounded-xl shadow-lg py-2 px-5 text-black my-1" placeholder="Name" />
                            <input type="email" name="email" className="w-full md:w-1/2 rounded-xl shadow-lg  py-2 px-5 text-black my-1" placeholder="Email" />
                        </div>
                        <input type="text" name="subject" className="rounded-xl shadow-lg py-2 px-5 text-black basis-[100%] my-1" placeholder="Subject" />
                        <textarea name="message" placeholder="Message" id="" cols="10" rows="5" className="rounded-xl shadow-lg py-1 px-5 text-black w-full my-1"></textarea>
                        <button className="rounded-lg bg-red-500 py-2 my-2 px-5 text-white  ">Send Message</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact