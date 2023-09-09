import { Link } from "react-router-dom";
import { styled } from "styled-components";

function GoBack() {
  return <LinkGoBack to={`/`}>ᐸ</LinkGoBack>;
}

const LinkGoBack = styled(Link)`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
`;

export default GoBack;
