import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { SubHeaderStyle, TextHeaderStyle, ButtonStyle } from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getAllGroceries } from "../Actions/GroceryAction";

export default function Product() {
  // const [showAll, setShowAll] = useState(false);

  const grocerystate = useSelector((state) => state.getAllGroceriesReducers);
  const { grocery, error, loading } = grocerystate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGroceries());
  }, []);

  // const sixGroceries = grocery.filter((x, i) => i < 8);
  // const dataToShow = showAll ? grocery : sixGroceries;

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
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Something went wrong</h1>
          ) : (
            grocery.map((grocery) => {
              return <Items key={grocery._id} items={grocery} />;
            })
          )}
        </div>
        {/* <div className="flex justify-center">
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
        </div> */}
      </div>
    </>
  );
}
