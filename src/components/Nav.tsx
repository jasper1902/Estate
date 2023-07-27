import { Link } from "react-scroll";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { FaGithubSquare } from 'react-icons/fa'

const Nav = () => {
    const navLinks = [
        { to: "home", label: "Home" },
        { to: "about", label: "About Us" },
        { to: "feature", label: "Our Features" },
        { to: "sale", label: "On Sale" },
        { to: "service", label: "Our Services" },
        { to: "demo", label: "Demo" },
        { to: "client", label: "Our Clients" },
    ];

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white bg-opacity-80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
                <Link to="home" className="text-2xl font-medium text-blue-500 cursor-pointer">
                    Logo
                </Link>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <label htmlFor="menu-toggle" className="cursor-pointer">
                        <GiHamburgerMenu />
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" onChange={handleMobileMenuToggle} />

                    <div
                        className={`${isMobileMenuOpen ? "block" : "hidden"
                            } fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md py-4`}
                    >
                        <button
                            className="absolute top-2 right-2 w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                            onClick={handleMobileMenuToggle}
                        >
                            <RxCross2 size="25" />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="block text-gray-600 hover:text-blue-500 cursor-pointer px-4 py-2"
                                onClick={handleMobileMenuToggle}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            className="block px-4 py-2 bg-amber-800 rounded-lg text-white font-bold mt-4"
                            onClick={handleMobileMenuToggle}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8 lg:items-center">
                    {navLinks.map((link) => (
                        <Link
                            smooth={true}
                            duration={500}
                            key={link.to}
                            to={link.to}
                            className="text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <Link to="contact" smooth={true} duration={500}>
                            <div className="px-6 py-4 bg-amber-800 rounded-lg text-white font-bold cursor-pointer">
                                Contact Us
                            </div>
                        </Link>

                        <div>
                            <a href="https://github.com/jasper1902/Estate"><FaGithubSquare size="40" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
