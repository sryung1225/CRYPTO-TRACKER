import { useHistory } from "react-router-dom";
import { styled } from "styled-components";

function GoBack() {
  const history = useHistory();
  const handleHistory = () => history.goBack();
  return <Btn onClick={handleHistory}>ᐸ</Btn>;
}

const Btn = styled.button`
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
