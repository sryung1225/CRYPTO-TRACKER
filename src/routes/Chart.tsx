import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { theme } from "../theme";

function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            colors: [theme.accentColor],
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["white"], stops: [0, 100] },
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            grid: { show: false },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: true, rotate: 0 },
              type: "datetime",
              categories: data?.map((price) =>
                new Date(Number(price.time_close) * 1000).toUTCString()
              ),
            },
            yaxis: { show: false },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(4)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IChartProps {
  coinId: string;
}

export default Chart;
