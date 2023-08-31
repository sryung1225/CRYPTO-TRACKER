import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams() as RouteParams;
  const { state } = useLocation() as RouteState;
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
  max-width: 480px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  state: {
    name: string;
  };
}

export default Coin;
