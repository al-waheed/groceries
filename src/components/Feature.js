import React from "react";
import {
  TextHeaderStyle,
  TextStyle,
  ButtonStyle,
  ButtonTextStyle,
  SubHeaderStyle,
} from "./Util/Style.js";

export default function Feature() {
  return (
    <>
        <div className="flex justify-evenly items-center">
          <div className="w-[664px] h-auto" style={{ flex: "0 0 50%" }}>
            <img
              src="/images/image and card.png"
              alt="img"
              className="max-w-[none]"
            />
          </div>
          <div>
            <SubHeaderStyle
              style={{
                marginBottom: "8px",
                color: "#03A66B",
                fontWeight: "500",
              }}
            >
              WHY CHOOSE US
            </SubHeaderStyle>
            <TextHeaderStyle style={{ width: "394px", marginBottom: "22px" }}>
              Find Favorites and Discover New Ones
            </TextHeaderStyle>
            <TextStyle style={{ width: "358px" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus
              blanditiis praesen voluptatum deleniti.
            </TextStyle>
            <div className="flex mt-[50px]">
              <ButtonStyle>
                <ButtonTextStyle>Explore Now</ButtonTextStyle>
              </ButtonStyle>
            </div>
          </div>
        </div>
    </>
  );
}
