import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header>
            <div className='container'>
                 <div className='grid navbar-grid'>
                    <div className='Logo'>
                        <NavLink to = "/" onClick={closeMobileMenu}>
                        <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav className='menu-web'>
                        <ul>
                            <li>
                                <NavLink to = "/">Home</NavLink>
                            </li>
                            <li>
                            <NavLink to = "/about">About</NavLink>
                            </li>
                            <li>
                            <NavLink to = "/contact">Contact</NavLink>
                            </li>
                            <li>
                            <NavLink to = "/country">Country</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='ham-menu'>
                        <button onClick={toggleMobileMenu} className='mobile-menu-btn'>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                 </div>

                 {/* Mobile Menu */}
                 {isMobileMenuOpen && (
                     <nav className='menu-mobile'>
                         <ul>
                             <li>
                                 <NavLink to = "/" onClick={closeMobileMenu}>Home</NavLink>
                             </li>
                             <li>
                                 <NavLink to = "/about" onClick={closeMobileMenu}>About</NavLink>
                             </li>
                             <li>
                                 <NavLink to = "/contact" onClick={closeMobileMenu}>Contact</NavLink>
                             </li>
                             <li>
                                 <NavLink to = "/country" onClick={closeMobileMenu}>Country</NavLink>
                             </li>
                         </ul>
                     </nav>
                 )}
            </div>
        </header>
    )
}

export default Header
