import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextHeaderStyle } from "../Util/Style";
import { Route, Routes, Link} from "react-router-dom";
import AddGrocery from "./AddGrocery";
import GroceriesList from "./GroceriesList";
import UsersList from "./UsersList";
import OrdersList from "./OrdersList";

export default function Admin() {
  const userState = useSelector((state) => state.signinUsersReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href='/'
    }
  },);

  return (
    <div>
      <div className="my-28 md:mx-5 lg:mx-20">
        <TextHeaderStyle style={{ textAlign: "center" }}>
          Admin Panel
        </TextHeaderStyle>
        <hr />
        <ul
          className="flex justify-center bg-[#F54748] py-3 rounded-lg mb-10 mt-4 text-white 
        lg:text-[15px] font-medium cursor-pointer"
        >
          <li className="lg:mr-7 hover:text-[#ecd9d9] sm:mr-3">
            <Link to="/admin/userlist">Users List</Link>
          </li>
          <li className="lg:mr-7 hover:text-[#ecd9d9] sm:mr-3">
            <Link to="/admin/grocerieslist">Groceries List</Link>
          </li>
          <li className="lg:mr-7 hover:text-[#ecd9d9] sm:mr-3">
            <Link to="/admin/addgrocery">Add New Grocery</Link>
          </li>
          <li className="hover:text-[#ecd9d9]">
            <Link to="/admin/orderlist">Orders List</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/admin/addgrocery" Component={AddGrocery} exact />
        <Route path="/admin/grocerieslist" Component={GroceriesList} exact />
        <Route path="/admin/userlist" Component={UsersList} exact />
        <Route path="/admin/orderlist" Component={OrdersList} exact />
      </Routes>
    </div>
  );
}
