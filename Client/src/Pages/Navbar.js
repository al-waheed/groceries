import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faSearch,
  faBars,
  faXmark,
  faBasketShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -10,
    border: `4px solid #F54B4B`,
    padding: "0 4px",
    color: "white",
    background: "#F54748",
  },
}));

const Navbar = () => {
  const cartState = useSelector((state) => state.CartReducer);
  const userState = useSelector((state) => state.signinUsersReducer);
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

  return (
    <div
      className="flex justify-between items-center py-8 px-24 max-w-auto mx-auto"
      style={{ borderBottom: "1px solid #F55253" }}
    >
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
          <li className="px-6">Menu</li>
          <li className="px-6">Service</li>
          <li className="px-6">Shop</li>
        </ul>
        <div className="ml-24 relative">
          <input
            type="text"
            placeholder="Search"
            className="h-14 w-80 text-[16px] font-medium outline-none pl-12 text-[#232323] 
            drop-shadow-md bg-[#Ffffff] rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-5">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[#8B8B8B] text-[16px]"
            />
          </div>
          <div className="flex items-center absolute top-1/2 -translate-y-1/2 right-3">
            <div
              className="h-7 w-[1px]"
              style={{ border: "1px solid #F2F2F2" }}
            ></div>
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
        <div className="ml-9">
          {currentUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open menu">
                <Typography
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  className="text-[#4D4D4D] font-medium"
                >
                  Hi, {currentUser.firstName}
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
            <Link to="/signIn">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-4xl text-[#8B8B8B]"
              />
            </Link>
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
  );
};

export default Navbar;
