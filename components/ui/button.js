import styled from "styled-components";
import { Link } from "react-scroll";

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  border-radius: 50px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export default Button;
