import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { fetchCoins } from "../api";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
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

const Img = styled.img`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    color: ${(props) => props.theme.bgColor};
    transition: color 0.2s ease-in;
  }
  &:hover a {
    color: ${(props) => props.theme.accentColor};
  }
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default Coins;
