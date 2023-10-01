import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

function ToggleDark() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <ToggleDarkBtn onClick={toggleDarkAtom}>
      <ToggleDarkCircle $isDark={isDark}></ToggleDarkCircle>
      <ToggleDarkIconWrap>
        <ToggleDarkIcon>☀</ToggleDarkIcon>
        <ToggleDarkIcon>☪</ToggleDarkIcon>
      </ToggleDarkIconWrap>
    </ToggleDarkBtn>
  );
}

const ToggleDarkBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
`;

const ToggleDarkCircle = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: 5%;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 50px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.$isDark &&
    `
      transform: translate(40px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const ToggleDarkIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const ToggleDarkIcon = styled.span`
  display: block;
  line-height: 40px;
  font-size: 24px;
  color: ${(props) => props.theme.bgColor};
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

export default ToggleDark;
