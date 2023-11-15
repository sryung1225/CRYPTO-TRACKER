import { useQuery } from "@tanstack/react-query";
import styled, { css } from "styled-components";
import { fetchCoinTickers } from "../api";

function Price({ coinId }: IPriceProps) {
  const { isLoading, data } = useQuery<IPriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );
  const priceHistory = data?.quotes.USD || {
    percent_change_30m: 0,
    percent_change_1h: 0,
    percent_change_12h: 0,
    percent_change_7d: 0,
    percent_change_30d: 0,
    percent_change_1y: 0,
  };
  return (
    <>
      {isLoading ? (
        "Loading price..."
      ) : (
        <PriceList>
          <PriceItem>
            <Desc>From 30 minutes ago</Desc>
            <Rate $percentChange={priceHistory?.percent_change_30m}>
              {priceHistory?.percent_change_30m}%
            </Rate>
          </PriceItem>
          <PriceItem>
            <Desc>From 1 hour ago</Desc>
            <Rate $percentChange={priceHistory?.percent_change_1h}>
              {priceHistory?.percent_change_1h}%
            </Rate>
          </PriceItem>
          <PriceItem>
            <Desc>From 12 hours ago</Desc>
            <Rate $percentChange={priceHistory?.percent_change_12h}>
              {priceHistory?.percent_change_12h}%
            </Rate>
          </PriceItem>
          <PriceItem>
            <Desc>From 7 days ago</Desc>
            <Rate $percentChange={priceHistory?.percent_change_7d}>
              {priceHistory?.percent_change_7d}%
            </Rate>
          </PriceItem>
          <PriceItem>
            <Desc>From 30 days ago</Desc>
            <Rate $percentChange={priceHistory?.percent_change_30d}>
              {priceHistory?.percent_change_30d}%
            </Rate>
          </PriceItem>
          <PriceItem>
            <Desc>From 1 year ago</Desc>
            <Rate $percentChange={priceHistory?.percent_change_1y}>
              {priceHistory?.percent_change_1y}%
            </Rate>
          </PriceItem>
        </PriceList>
      )}
    </>
  );
}

const PriceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PriceItem = styled.li`
  display: inline-block;
  width: calc(50% - 5px);
  padding: 10px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  color: ${(props) => props.theme.bgColor};
  list-style: none;
`;

const Desc = styled.p`
  font-size: 16px;
`;

const Rate = styled.p<{ $percentChange: number }>`
  font-size: 28px;
  font-weight: bold;
  ${(props) =>
    props.$percentChange !== undefined &&
    css`
      color: ${props.$percentChange > 0
        ? "#f96868"
        : props.$percentChange < 0
        ? "#6896f9"
        : props.theme.bgColor};
    `}
`;

interface IPriceProps {
  coinId: string;
}

interface IPriceData {
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

export default Price;
