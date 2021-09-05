import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-white-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-white"
                        className="inflex-flex- items-center py-6 px-3 my-4 text-gray-600 hover: text-green-800 text 6xl font-bold cursive tracking-widest">
                        Michael Brucato
                    </NavLink>
                    <NavLink to="/about"
                        activeClassName="text-white"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-600 hover:text-green-800">
                        About Me
                    </NavLink>
                    <NavLink to="project"
                        activeClassName="text-white"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-600 hover:text-green-800">
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/michael-brucato/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/mikebrucato" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    
                </div>
            </div>
        </header>
    )
}