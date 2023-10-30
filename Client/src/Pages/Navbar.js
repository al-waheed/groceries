import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faSearch,
  faBasketShopping,
  faChevronDown,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { AppLogo } from "../Util/AppLogo";
import { styled } from "@mui/material/styles";
import { logOutUser } from "../Actions/UserActions";
import { itemSearchQuery } from "../Actions/CartActions";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Products", to: "/allproducts", current: false },
  { name: "Contact", to: "/contact", current: false },
  { name: "FAQ", to: "/faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 4,
    top: 2,
    border: `1px solid #FDECEC`,
    padding: "0 3px",
    color: "white",
    background: "#F54748",
  },
}));

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.signinUsersReducer);
  const searchItem = useSelector((state) => state.searchItemReducer.searchItem);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(itemSearchQuery(e.target.value));
  };

  return (
    <div className="sticky top-0 z-50">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-auto px-2 sm:px-6 lg:px-16">
              <div className="relative flex h-[12vh] items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-center md:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <AppLogo />
                    </Link>
                  </div>
                  <div className="hidden md:ml-10 md:block">
                    <div className="flex items-center space-x-4">
                      <div>
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-[#F54748] text-white"
                                : "text-[#676767] hover:text-[#F54748]",
                              "rounded-md px-5 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div
                        className="flex items-center justify-between h-11 w-[500px] text-[15px] font-medium 
                 outline-none pl-8 text-[#2E2E2E] drop-shadow-md bg-[#ffffff] rounded-lg"
                      >
                        <div className="">
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="text-[#8B8B8B] text-[16px]"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Search Product..."
                          value={searchItem}
                          onChange={handleSearchChange}
                          className="border-none outline-none ml-2 w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 :pr-0">
                  <Link to="/cart">
                    <StyledBadge>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="relative rounded-full text-[20px] mr-4 bg-[#F54748] p-1 text-[#313133] hover:text-[#FDECEC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      />
                    </StyledBadge>
                  </Link>
                  <Link to="/cart">
                    <StyledBadge badgeContent={cartState.cartItems.length}>
                      <FontAwesomeIcon
                        icon={faBasketShopping}
                        className="relative rounded-full text-[20px] mr-1 bg-[#F54748] p-1 text-[#313133] hover:text-[#FDECEC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      />
                    </StyledBadge>
                  </Link>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {currentUser ? (
                      <>
                        <div>
                          <Menu.Button className="relative outline-none flex items-center text-[#313133] cursor-pointer font-medium hover:text-[#F54748]">
                            <span className="absolute -inset-1.5" />
                            <h4 className="ml-2 mr-2">
                              Hi, {currentUser.fullName[0]}
                            </h4>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="text-[12px]"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/orders"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Orders
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  onClick={() => {
                                    dispatch(logOutUser());
                                  }}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    ) : (
                      <>
                        <div>
                          <Menu.Button className="relative rounded-full text-[18px] mr-1 bg-[#F54748] p-1 text-[#313133] hover:text-[#FDECEC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <FontAwesomeIcon icon={faUserPlus} />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/signin"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign In
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/signup"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign Up
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <div
                  className="flex items-center justify-between h-11 w-[100%] text-[15px] font-medium 
                 outline-none pl-12 text-[#878686] drop-shadow-md bg-[#ffffff] rounded-lg"
                >
                  <div className="">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-[#8B8B8B] text-[16px]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Product..."
                    value={searchItem}
                    onChange={handleSearchChange}
                    className="border-none outline-none ml-5 w-full"
                  />
                </div>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}