import React from "react";
import styled from "styled-components";
import { MainTextStyle, ButtonStyle } from "../Util/Style.js";
import { Link } from "react-router-dom";

const StyledMainTextStyle = styled(MainTextStyle)`
  max-width: 700px;
  font-size: 60px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 45px;
    line-height: 70px;
    width:350px;
  }
`

export default function HeroSection() {
  return (
    <div className="relative bg-no-repeat bg-cover bg-fixed text-center">
      <img
        src="/images/agricuturebg.jpg"
        alt="bg_image"
        className="h-[88vh] w-[100vw]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <StyledMainTextStyle>
          Natural Products For Lovers of {' '}
          <span style={{ color: "#F54748", fontWeight: "800" }}>Healthy</span>{' '}
          Organic Food
        </StyledMainTextStyle>
        <div className="mt-6 lg:mt-12">
          <ButtonStyle style={{ width: "250px" }}>
            <Link to="/allproducts">Discover More</Link>
          </ButtonStyle>
        </div>
      </div>
    </div>
  );
}
