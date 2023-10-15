import React from "react";
import { AppLogo } from "../Util/AppLogo";
import { Link } from "react-router-dom";

export default function Footers() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
              <div className="block text-teal-600 lg:hidden">
                <Link to="/">
                  <AppLogo />
                </Link>
              </div>
              <div className="mt-8 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded bg-[#F55253] lg:block"></span>
                <div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    Get in Touch.
                  </h2>
                  <p className="mt-4 max-w-lg text-gray-500">
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                </div>
                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>
                  <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="youremail@gmail.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />
                    <button className="mt-1 w-full rounded bg-[#F54748] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:text-[#F54748] transition-none hover:bg-[#fdecec] sm:mt-0 sm:w-auto sm:shrink-0">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="py-8 lg:pe-16">
              <div className="hidden text-teal-600 lg:block">
                <Link to="/">
                  <AppLogo />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-medium text-gray-900">Services</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to="/orders"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Order tracking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/'
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Wish List
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/cart'
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Customer Review
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/allproduct"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Helpful Links</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to="/contact"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Live Chat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-100 pt-4">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <Link
                      to="/faq"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Cookies
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  &copy; 2023 Grover. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
