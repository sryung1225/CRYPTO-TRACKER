import { useParams } from "react-router";

function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}

interface RouteParams {
  coinId: string;
}

export default Coin;
