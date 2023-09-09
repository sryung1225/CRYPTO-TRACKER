import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

function ToggleDark() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <ToggleDarkBtn onClick={toggleDarkAtom}>
      <ToggleDarkCircle toggle={isDark}></ToggleDarkCircle>
      <ToggleDarkIcon>☀ ☪</ToggleDarkIcon>
    </ToggleDarkBtn>
  );
}

const ToggleDarkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.textColor};
  transition: all 0.5s ease-in-out;
`;

const ToggleDarkCircle = styled.div<{ toggle: boolean }>`
  background-color: ${(props) => props.theme.bgColor};
  width: 30px;
  height: 30px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    `
      transform: translate(40px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const ToggleDarkIcon = styled.span`
  display: block;
  line-height: 40px;
  font-size: 30px;
  color: ${(props) => props.theme.bgColor};
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

export default ToggleDark;
