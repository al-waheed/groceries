import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { SubHeaderStyle, TextHeaderStyle, ButtonStyle } from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getAllGroceries } from "../Actions/GroceryAction";
import Alert from "@mui/material/Alert";
import { Loading, Error } from "../Pages/AlertComponent";

export default function Product() {
  const [showAll, setShowAll] = useState(false);
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

  // const filteredGroceries = grocery.filter((item) => {
  //   return item.name.toLowerCase().includes(searchItem.toLowerCase());
  // });

  const filteredGroceries = grocery.reduce((filteredItems, item) => {
    if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
      filteredItems.push(item);
    }
    return filteredItems;
  }, []);  

  const sixGroceries = filteredGroceries.slice(0, 10);
  const dataToShow = showAll ? filteredGroceries : sixGroceries;

  return (
    <>
      <div className="pb-[30px] m-16">
        <div className="text-left mb-7">
          <SubHeaderStyle style={{ marginBottom: "4px" }}>
            Categories
          </SubHeaderStyle>
          <TextHeaderStyle>Our Products</TextHeaderStyle>
        </div>
        {filteredGroceries.length === 0 ? (
          <p className="text-center">No result for your search criteria.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Array.isArray(dataToShow) &&
              dataToShow.map((groceryItem) => {
                return <Items key={groceryItem._id} items={groceryItem} />;
              })}
          </div>
        )}
        {!searchItem && (
          <div className="flex justify-center mt-5">
            <ButtonStyle
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 25px",
              }}
            >
              {showAll ? "Load Less" : "Load More"}
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="text-[#fff] text-[20px]"
              />
            </ButtonStyle>
          </div>
        )}
      </div>
    </>
  );
}
