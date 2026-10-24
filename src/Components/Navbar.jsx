import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/MyNav.css'
import '../Components/Myscript.js'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  container-fluid fixed-top py-3  bg-color-scrolled bg-color">
                <div className="container">

                    <Link className="navbar-brand text-white " to="#">
                        <img src="src/assets/logo.png" alt="" className='img-fluid' /></Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white me-3" aria-current="page" to="/home">home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white me-3" aria-current="page" to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white me-3" aria-current="page" to="/car">cars</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white me-3" aria-current="page" to="/service">services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white me-3" aria-current="page" to="/team">team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white me-3" aria-current="page" to="/blog">blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white me-3" aria-current="page" to="/contact">contact</Link>
                            </li>
                            <li className="nav-item">
                                <div className="btn-group">
                                    <button type="button" className="btn text-white dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                        Danger
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/blog_single">BLOG SINGLE</Link></li>
                                        <li><Link className="dropdown-item" to="/elements">ELEMENTS</Link></li>

                                    </ul>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar