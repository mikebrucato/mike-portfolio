import React from "react"
import image from "../header-background.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="chicago" className="absolute object-cover w-full h-med" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-5-xl text-white font-bold leading-none lg: leading-snug home-name">Hi. I'm Mike.</h1>
            </section>
        </main>
    )
}