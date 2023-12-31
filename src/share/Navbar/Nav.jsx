import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Providers/AuthProviders";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <header className="bg-slate-300">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="HeroGadget"
            title="HeroGadget"
            className="inline-flex items-center"
          >

            <span className="ml-2 text-3xl font-bold  text-red-700">
              MASTER-CHEF
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex text-lg font-bold">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                aria-label="About"
                title="About"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                BLOG
              </NavLink>
            </li>

            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline "
                >
                  LOG OUT
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn btn-outline mr-3">LOGIN</button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-outline">SIGN UP</button>
                  </Link>
                </>
              )}
            </li>

            <li>
              {user && (
                <img
                  id="img"
                  alt=""
                  className="w-12 h-12 border rounded-full dark:bg-gray-400 dark:border-gray-600"
                  src={user.photoURL}
                />
              )}
              {user && (
                <ReactTooltip
                  anchorId="img"
                  place="top"
                  variant="info"
                  className="-mt-2"
                  content={user.displayName}
                />
              )}
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">

                  <div className="flex items-center justify-between mb-4">


                    <div>
                      <Link
                        to="/"
                        aria-label="HeroChef"
                        title="HeroGadget"
                        className="inline-flex items-center"
                      >

                        <span className="ml-2 text-3xl font-bold  text-red-700">
                          MASTER-CHEF
                        </span>

                      </Link>
                    </div>

                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="About Us"
                          title="About Us"
                          className="font-medium tracking-wide  "
                        >
                          HOME
                        </Link>

                        <NavLink
                          to="/blog"
                          aria-label="About"
                          title="About"
                          className={({ isActive }) => (isActive ? "active" : "default")}
                        >
                          <h1 > BLOG </h1>
                        </NavLink>

                        <>
                          <Link to="/login">
                            <button className="btn btn-outline mr-3">LOGIN</button>
                          </Link>
                          <Link to="/register">
                            <button className="btn btn-outline">SIGN UP</button>
                          </Link>
                        </>

                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
