import Styled from "styled-components";
import color from "./Color";

export const ButtonStyle = Styled.button`
  width: 186px;
  height: 70px;
  background: ${(props) => props.background || color.ORANGE};
  border-radius: 12px;
`;

export const ButtonTextStyle = Styled.h6`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${(props) => props.background || color.WHITE};
`;

export const MainTextStyle = Styled.h1`
  font-weight: 800;
  font-size: 74px;
  line-height: 88px;
  color: ${color.BLACK};
  letter-spacing: -0.74px;
`;

export const SmallHeaderStyle = Styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.color || color.BLACK};
`;

export const TextHeaderStyle = Styled.h3`
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  text-transform: capitalize;
  color: ${color.BLACK};
`;

export const SubHeaderStyle = Styled.h6`
  color: ${(props) => props.color || color.ORANGE};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.18px;
`;

export const TextStyle = Styled.p`
  color: ${color.GRAY};
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

export const SmallTextStyle = Styled.h6`
  color: ${color.GRAY};
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
`;