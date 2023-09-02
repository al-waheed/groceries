import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { SubHeaderStyle, TextHeaderStyle, ButtonStyle } from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getAllGroceries } from "../Actions/GroceryAction";
import Alert from "@mui/material/Alert";
import { Loading, Error } from '../Pages/AlertComponent'

export default function Product() {
  const [showAll, setShowAll] = useState(false);
  const grocerystate = useSelector((state) => state.getAllGroceriesReducers);
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

  const sixGroceries = grocery.slice(0, 8);
  const dataToShow = showAll ? grocery : sixGroceries;

  return (
    <>
      <div className="bg-[#FEF5F5] py-[100px] px-14">
        <div className="text-center mb-20 ">
          <SubHeaderStyle style={{ marginBottom: "8px" }}>
            Categories
          </SubHeaderStyle>
          <TextHeaderStyle>Our Products</TextHeaderStyle>
        </div>
        <div className="flex items-center justify-around flex-wrap">
          {dataToShow.map((groceryItem) => {
            return <Items key={groceryItem._id} items={groceryItem} />;
          })}
        </div>
        <div className="flex justify-center">
          <ButtonStyle
            onClick={() => setShowAll(!showAll)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 25px",
            }}
          >
            {showAll ? "Load Less" : `Load More`}
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="text-[#fff] text-[20px]"
            />
          </ButtonStyle>
        </div>
      </div>
    </>
  );
}
