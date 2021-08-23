import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useContext } from 'react'
import { useState } from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom"
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'

const Navbar = () => {
    // useState for setting--transparent, we scroll darker navbar!
    const [isScrolled, setIsScrolled] = useState(false);

    const { dispatch } = useContext(AuthContext)

    // Initially 0, when we scroll it changes
    // whenever we run this func it runs
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        // Prevent it from beign an infinite loop
        return () => (window.onscroll = null);
    };

    // logs false if not scrolled and true if scrolled!
    console.log(isScrolled)

    return (
        // Set logic here!
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                    <Link to="/" className="link"><span>Homepage</span></Link>
                    <Link to="/series" className="link"><span className="navbarmainLinks">Series</span></Link>
                    <Link to="/movies" className="link"><span className="navbarmainLinks"> Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://avatars.githubusercontent.com/u/77796121?v=4" alt="" />

                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        {/* On hover they appear */}
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
