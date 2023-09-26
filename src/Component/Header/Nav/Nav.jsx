import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="md:navbar items-center navbar-center justify-center bg-base-100">
                <Logo></Logo>

                <div className="md:navbar-end navbar-center lg:flex">
                    <ul className="menu menu-horizontal gap-7 text-lg px-1">
                        <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg" : ""
                            }
                        >
                           Home
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg" : ""
                            }
                        >
                           Donation
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg" : ""
                            }
                        >
                           Statistics
                        </NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;