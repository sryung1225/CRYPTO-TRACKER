import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}

interface IChartProps {
  coinId: string;
}

export default Chart;
