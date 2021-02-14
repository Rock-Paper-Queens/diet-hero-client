import React, { useRef, useState, useCallback, RefObject } from "react";
import { Box, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
// import CryptoListItem from "./cryptoListItem";
import { numberWithCommas } from "../../../utils/utils";
import { useGetCoinList } from "../../../utils/useGetCoinList";

const Cryptos = () => {
	const data = [
		{
			id: "bitcoin",
			market_cap_rank: 1,
			image:
				"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
			name: "Bitcoin",
			symbol: "BTC",
			price: 45652.81,
			price_change_percentage_24h: -0.50012,
			price_change_percentage_7d: 24.0139,
			market_cap: 850338768910,
			total_volume: 18624392936,
		},
	];

	const [pageNumber, setPageNumber] = useState(1);
	const { coins, loading, hasMore, error } = useGetCoinList(pageNumber);

	const observer = useRef<IntersectionObserver | null>();
	const lastCoinElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer?.current?.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	//useRef<HTMLDivElement>();/

	const renderTableRow = () => {
		return coins.map((coin, idx) => {
			// return <CryptoListItem key={coin.id} idx={idx + 1} {...coin} />;
			if (coins.length === idx + 1) {
				return (
					<div key={idx} ref={lastCoinElementRef}>
						{coin.title}
					</div>
				);
			}
			return <div key={idx}>{coin.title}</div>;
		});
	};

	return (
		<Box>
			{renderTableRow()}
			{/* <Table variant="simple">
				<Thead>
					<Tr>
						<Th>No</Th>
						<Th>Name</Th>
						<Th>Price</Th>
						<Th>24h</Th>
						<Th>7d</Th>
						<Th>Market Cap</Th>
						<Th>Volumn</Th>
						<Th>Last 7 Days</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>{renderTableRow()}</Tbody>
			</Table> */}
		</Box>
	);
};

export default Cryptos;
