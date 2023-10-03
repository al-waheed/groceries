import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faSearch,
  faBars,
  faXmark,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { AppLogo } from "../Util/AppLogo";
import { logOutUser } from "../Actions/UserActions";
import { itemSearchQuery } from "../Actions/CartActions";

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

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.signinUsersReducer);
  const searchItem = useSelector((state) => state.searchItemReducer.searchItem);
  const { currentUser } = userState;
  const [nav, setNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    dispatch(itemSearchQuery(value));
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-center py-4 bg-[#FDECEC]">
        <div
          className="flex items-center justify-between h-11 w-[50%] text-[15px] font-medium 
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
        <div className="flex items-center">
          <Link to="/cart">
            <StyledBadge>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-[#151414] text-[25px] ml-3"
              />
            </StyledBadge>
          </Link>
          <Link to="/cart">
            <StyledBadge badgeContent={cartState.cartItems.length}>
              <FontAwesomeIcon
                icon={faBasketShopping}
                beatFade
                className="text-[#3c3737] text-[25px] ml-3"
              />
            </StyledBadge>
          </Link>
        </div>
      </div>
      <div className="flex justify-between bg-[#fff] items-center py-5 px-16 max-w-auto mx-auto">
        <h1 className="text-[#F55253] text-[28px] font-bold">
          <Link to="/">
            <AppLogo />
          </Link>
        </h1>
        <div className="hidden lg:flex items-center cursor-pointer">
          <ul className="flex items-center font-medium text-base text-[#4D4D4D]">
            <li className="px-6 text-[#F55253]">
              <Link to="/"> Home </Link>
            </li>
            <li className="px-6">
              <Link to="/"> Menu </Link>
            </li>
            <li className="px-6">
              <Link to="/allproducts"> Products </Link>
            </li>
            <li className="px-6">
              <Link to="/faq"> FAQ </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {currentUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open menu">
                <Typography
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  className="text-[#262626] font-medium"
                >
                  welcome, {currentUser.firstName}
                  <ArrowDropDownIcon className="text-[#F55253]" />
                </Typography>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <div onClick={handleCloseUserMenu} className="w-24">
                  <Typography
                    className="text-center text-[#F55253] font-medium 
                  cursor-pointer hover:bg-[#FDECEC] py-1 rounded-sm"
                  >
                    <Link to="/orders">Orders</Link>
                  </Typography>
                  <Typography
                    onClick={() => {
                      dispatch(logOutUser());
                    }}
                    className="text-center text-[#F55253] font-medium 
                  cursor-pointer hover:bg-[#FDECEC] py-1 rounded-sm "
                  >
                    Log out
                  </Typography>
                </div>
              </Menu>
            </Box>
          ) : (
            <h6
              className="mr-8 pb-1 font-medium text-[#4D4D4D]"
              style={{ borderBottom: "2px solid #F55253" }}
            >
              <Link to="/signin">Log In</Link>
            </h6>
          )}
          {!currentUser && (
            <div>
              <button
                className="px-5 py-2.5 text-[#FDECEC] font-semibold 
            border-white border-[1px] bg-[#F54748] rounded-[6px]
            hover:bg-[#FDECEC]  hover:text-[#F54748] hover:border-[#F54748]"
              >
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          )}
        </div>
      </div>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? (
          <FontAwesomeIcon className="text-4xl text-[#F55253]" icon={faBars} />
        ) : (
          <FontAwesomeIcon className="text-4xl text-[#F55253]" icon={faXmark} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "lg:hidden fixed left-0 top-0 w-[70%] h-full border-r border-r-[#F55253] bg-[#F55253] ease-in-out duration-500"
        }
      >
        <ul className=" pt-36 font-medium text-lg text-[#4D4D4D] ">
          <li className="p-4 text-[#F55253] border-b border-[#F55253]">
            <Link to="/"> Home </Link>
          </li>
          <li className="p-4 border-b border-[#F55253]">Menu</li>
          <li className="p-4 border-b border-[#F55253]">Service</li>
          <li className="p-4 border-b border-[#F55253]">Shop</li>
        </ul>
        <div className="p-4 relative border-b border-[#ffffff]">
          <input
            type="text"
            placeholder="Search"
            className="h-14 w-72 text-[16px] font-medium outline-none pl-12 text-[#232323] 
              shadow-2xl bg-[#Ffffff] rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 pl-6">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[#8B8B8B] text-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
