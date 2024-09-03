import { FaPhone, FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuBtn, setMenuBtn] = useState(false);

    const menuList = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </>
    );

    return (
        <header>
            {/* Header Top */}
            <div className="hidden border-b border-light py-3 lg:block">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                            <a href="tel:0932492349" className="hover:accent flex items-center gap-1 text-textColor lg:gap-2">
                                <FaPhone /> <span>0932 492 349</span>
                            </a>
                        </div>
                        {/* Social icons */}
                        <ul className="flex items-center gap-2">
                            <li>
                                <a href="#" className="md:text-md flex h-7 w-7 items-center justify-center rounded-md border border-accent text-sm text-primary hover:bg-accent hover:text-white">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="md:text-md flex h-7 w-7 items-center justify-center rounded-md border border-accent text-sm text-primary hover:bg-accent hover:text-white">
                                    <FaXTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="md:text-md flex h-7 w-7 items-center justify-center rounded-md border border-accent text-sm text-primary hover:bg-accent hover:text-white">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="md:text-md flex h-7 w-7 items-center justify-center rounded-md border border-accent text-sm text-primary hover:bg-accent hover:text-white">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                        {/* End of the social media */}
                    </div>
                </div>
            </div>
            {/* End of the hero top */}
            {/* Start header center */}
            <div className="header-center py-3 md:py-4 xl:py-5">
                <div className="container">
                    <div className="flex items-center justify-between gap-4">
                        <a href="/" className="hidden lg:block">
                            <img src="../assets/images/batigor logo.png" alt="Batigor" className="h-16 w-auto" />
                        </a>
                        {/* Search box */}
                        <form action="" className="flex w-full items-center justify-center overflow-hidden">
                            <input type="text" placeholder="Search for products" className="w-full rounded-l-lg border border-light px-3 py-2 focus:border-accent focus:outline-none md:w-[500px] md:py-3" />
                            <button type="submit" className="rounded-r-lg border border-accent bg-accent px-4 py-2 text-white transition-all duration-200 hover:bg-accent2 md:py-3">
                                <FaSearch />
                            </button>
                        </form>
                        {/* Header action */}
                        <div className="hidden items-center gap-4 md:gap-6 lg:flex">
                            <button id="wishlist" className="icon">
                                <FaHeart />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">10</span>
                            </button>
                            <button id="cart" className="icon">
                                <FaCartShopping />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">2</span>
                            </button>
                            <div className="dropdown dropdown-end">
                                <button tabIndex={0} id="user" className="icon">
                                    <FaUser />
                                </button>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-user" /> <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-heart" /> <span>Wishlist</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-shopping-cart" /> <span>Cart</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-sign-out" /> <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End of the header action */}
                    </div>
                </div>
            </div>
            {/* End of the header center */}
            {/* Nav/main menu */}
            <div className="primary-nevigation bg-secondary">
                <div className="container">
                    <div className="flex items-center justify-between py-3 lg:py-0">
                        {/* Mobile menu hamber and logo */}
                        <div className="flex items-center gap-4 lg:hidden">
                            <button id="menu-btn" role="button" className="icon text-accent">
                                <i className="fa-solid fa-bars" />
                            </button>
                            <a href="/">
                                <h2 className="heading--four italic text-white">Batighor</h2>
                            </a>
                        </div>
                        {/* Primary menu */}
                        <div className="primary-menu w-72 lg:flex lg:w-auto">
                            <div className="flex items-center justify-between p-4 lg:hidden">
                                <a href="/">
                                    <h2 className="heading--four italic text-primary">Batighor</h2>
                                </a>
                                {/* Menu close button */}
                                <button id="close-btn" className="icon">
                                    <i className="fa-solid fa-times" />
                                </button>
                            </div>
                            <ul className="navbar-menu flex w-full flex-col text-white lg:flex-row">
                                {menuList}
                            </ul>
                        </div>
                        <div className="flex items-center gap-3 lg:hidden">
                            <a href="wishlist.html" className="icon">
                                <i className="fa-regular fa-heart" />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">10</span>
                            </a>
                            <a href="cart.html" className="icon">
                                <i className="fa-solid fa-shopping-cart" />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">2</span>
                            </a>
                            <div className="dropdown dropdown-end">
                                <button tabIndex={0} id="user" className="icon">
                                    <i className="fa-solid fa-user" />
                                </button>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] mt-2.5 w-52 rounded-lg bg-base-100 p-2 shadow">
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-user" /> <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-heart" /> <span>Wishlist</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-shopping-cart" /> <span>Cart</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="text-xs text-textColor hover:text-accent md:text-sm">
                                            <i className="fa-solid fa-sign-out" /> <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of the container */}
            </div>
            {/* End of the nav/main menu */}
        </header>
    );
};

export default Header;
