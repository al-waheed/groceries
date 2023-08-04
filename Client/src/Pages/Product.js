import React, { useState } from "react";
import Groceries from "../Util/GroceryData";
import Items from "./Items";
import {
  SubHeaderStyle,
  TextHeaderStyle,
  ButtonStyle,
} from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  const [showAll, setShowAll] = useState(false);

  const sixGroceries = Groceries.filter((x, i) => i < 8);
  const dataToShow = showAll ? Groceries : sixGroceries;

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
          {dataToShow.map((items, id) => {
            console.log(items.prices[0])
            return <Items key={id} items={items} />;
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
