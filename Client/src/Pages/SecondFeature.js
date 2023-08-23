import React from "react";
import {
  TextHeaderStyle,
  TextStyle,
  ButtonStyle2,
  SubHeaderStyle,
} from "../Util/Style.js";

export default function SecondFeature() {
  return (
    <>
      <div className="flex justify-evenly items-center ml-10 mb-10">
        <div>
          <SubHeaderStyle
            style={{
              marginBottom: "8px",
              color: "#F9BA45",
              fontWeight: "500",
            }}
          >
            HOME DELIVERY
          </SubHeaderStyle>
          <TextHeaderStyle style={{ width: "519px", marginBottom: "22px" }}>
            Sit at Home We Will Take Care Your Order
          </TextHeaderStyle>
          <TextStyle style={{ width: "465px" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
          </TextStyle>
          <div className="flex mt-[50px]">
            <ButtonStyle2>
              Explore Now
            </ButtonStyle2>
          </div>
        </div>
        <div className="w-[664px] h-auto" style={{ flex: "0 0 10%" }}>
          <img
            src="/images/image&card.png"
            alt="img"
            className="max-w-[none]"
          />
        </div>
      </div>
    </>
  );
}
