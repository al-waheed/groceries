import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { TextHeaderStyle } from "../Util/Style";
import { getAllGroceries } from "../Actions/GroceryAction";
import Alert from "@mui/material/Alert";
import { Loading, Error } from "../Pages/AlertComponent";

export default function AllProducts() {
  const grocerystate = useSelector((state) => state.getAllGroceriesReducers);
  const searchItem = useSelector((state) => state.searchItemReducer.searchItem);
  const { grocery, error, loading } = grocerystate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGroceries());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error error={<Alert severity="error">Something went wrong</Alert>} />
    );
  }

  const filteredGroceries = grocery.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div className="pb-[30px] my-20 mx-16">
        <div className="text-center mb-7">
          <TextHeaderStyle>Our Grocery Products</TextHeaderStyle>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {filteredGroceries.length === 0 ? (
            <p>No items matching your search criteria found.</p>
          ) : (
            grocery.map((groceryItem) => {
              return <Items key={groceryItem._id} items={groceryItem} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
