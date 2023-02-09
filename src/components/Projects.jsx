import React from 'react'

function Projects() {
    return (
        <section
            id="projects"
            className="h-full overflow-y-scroll flex flex-col text-xl px-12 py-10 dark:text-[#f2f2fc]"
        >
            <h1 className="text-4xl font-bold w-60 ">My Projects</h1>
            <hr className="border-2 border-red-500 h-1 w-28" />
            <hr className="border-2 border-red-500 h-1 w-16 mt-1" />
            <hr className="border-2 border-red-500 h-1 w-8 my-1" />
            <div className='flex flex-col py-10 gap-20'>
                <div className='flex'>
                    <div className='flex flex-col gap-4 shadow-lg basis-1/2 p-5 '>
                        <h1 className='font-bold text-2xl'>A food delivery startup landing page</h1>
                        <p className='text-lg text-gray-400'>A landing page for a food delivery startup company. It show cases the main services, pricing and a contact page. It's responsive and clean code that follows best coding practices.</p>
                        <ul className='list-disc text-gray-400 text-lg px-5'>
                            <li>Tailwind css</li>
                            <li>React.js</li>
                        </ul>
                        <div className='flex items-center gap-10'>
                            <a href="https://tekusmesa.com" target="_blank" className='border-b-2 border-red-500 dark:text-gray-400'>Visit Site </a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='dark:fill-gray-400'>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                            </svg>
                            <a href="https://github.com/Natnael-Tilahun/TekusMesa" target="_blank" alt='a food delivery company github link'>
                                <svg className='dark:fill-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img src="/tekusmesa-screenshot.png" alt="chrome extension dashboard image" className='w-1/2 basis-1/2 rounded-md bg-cover' />
                </div>

                <div className='flex'>
                    <div className='flex flex-col gap-4 shadow-lg basis-1/2 p-5 '>
                        <h1 className='font-bold text-2xl'>A journal and handy crafts online shoping landing page</h1>
                        <p className='text-lg text-gray-400'>A Journal and handy craft product online shoping landing page. It displays a product list, a contact list to order online. It's a responsive and pixel perfect.</p>
                        <ul className='list-disc text-gray-400 text-lg px-5'>
                            <li>Tailwind css</li>
                            <li>React.js</li>
                        </ul>
                        <div className='flex items-center gap-10'>
                            <a href="https://setadess.com" target="_blank" className='border-b-2 border-red-500 dark:text-gray-400'>Visit Site </a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='dark:fill-gray-400'>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                            </svg>
                            <a href="https://github.com/Natnael-Tilahun/setades" target="_blank" alt='a food delivery company github link'>
                                <svg className='dark:fill-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img src="/setadess.png" alt="chrome extension dashboard image" className='w-1/2 basis-1/2 rounded-md bg-cover' />
                </div>

                <div className='flex'>
                    <div className='flex flex-col gap-4 shadow-lg basis-1/2 p-5 '>
                        <h1 className='font-bold text-2xl'>Personal Dashboard</h1>
                        <p className='text-lg text-gray-400'>A Chrome extension to help you focus and stay up-to-data. It gives you an overview over the current time, how the wheather is like, how bitcoin is performing and display different motivational quotes. Interacts with multiple APIs using async JS.</p>
                        <ul className='list-disc text-gray-400 text-lg px-5'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>External APIS</li>
                        </ul>
                        <div className='flex items-center gap-10'>
                            <a href="" className='border-b-2 border-red-500 dark:text-gray-400'>Visit Site </a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='dark:fill-gray-400'>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                            </svg>
                            <a href="https://github.com/Natnael-Tilahun/Dashboard-Chrome-Extension" target="_blank">
                                <svg className='dark:fill-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img src="/chrome-extension-image.png" alt="chrome extension dashboard image" className='w-1/2 basis-1/2 rounded-md bg-cover' />
                </div>
               
            </div>
        </section>
    )
}

export default Projects