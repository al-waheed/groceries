import Styled from "styled-components";
import color from "./Color";

export const ButtonStyle = Styled.button`
  width: 186px;
  height: 70px;
  background: ${(props) => props.background || color.ORANGE};
  border-radius: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  transition: 0.3s;
  color: ${(props) => props.background || color.WHITE};
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

export const ButtonStyle2 = Styled.button`
  width: 186px;
  height: 70px;
  background: transparent;
  border: 2px solid ${color.ORANGE};
  border-radius: 12px;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  transition: 0.3s;
  color: ${(props) => props.background || color.ORANGE};
  &:hover {
    background: ${color.ORANGE};
    color: ${color.WHITE};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

export const SmallButtonStyle = Styled.button`
  padding: 8px 12px 8px 12px;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 700;
  color: #ffffff;
  transition: 0.3s;
  background: ${color.ORANGE};
  &:hover{
   font-size: 19px;
  }
`;

export const CategoryButtonStyle = Styled.button`
  padding: 5px 10px 5px 10px;
  font-size: 10px;
  border-radius: 6px;
  color: #ffffff;
  background: ${(props) => props.background || color.ORANGE};
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
