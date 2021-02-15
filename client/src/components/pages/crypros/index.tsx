import React, { useRef, useState, useCallback } from "react";
import { Box, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import CryptoListItem from "./cryptoListItem";
import { useGetCoinList } from "../../../utils/useGetCoinList";
import TransactionModal from "../../modules/modal/transactionModal";
import PaginationButton from "../../modules/pagination";

const Cryptos = () => {
	// const data = [
	// 	{
	// 		id: "bitcoin",
	// 		market_cap_rank: 1,
	// 		image:
	// 			"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
	// 		name: "Bitcoin",
	// 		symbol: "BTC",
	// 		price: 45652.81,
	// 		price_change_percentage_24h: -0.50012,
	// 		price_change_percentage_7d: 24.0139,
	// 		market_cap: 850338768910,
	// 		total_volume: 18624392936,
	// 	},
	// ];

	const [pageNumber, setPageNumber] = useState(0);
	// const [scrollNumber, setScrollNumber] = useState(
	// 	pageNumber - 1 + (pageNumber % 4)
	// );
	const { coins, loading, hasMore, error } = useGetCoinList(pageNumber);
	const [isOpen, setIsOpen] = useState(false);
	// const { current: totalPage } = useRef(25);

	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	const observer = useRef<IntersectionObserver | null>();
	const lastCoinElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					console.log("plus");
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	const renderTableRow = () => {
		return coins.map((coin, idx) => {
			if (coins.length === idx + 1) {
				return (
					<CryptoListItem
						key={coin.id}
						ref={lastCoinElementRef}
						idx={idx + 1}
						onOpen={onOpen}
						{...coin}
					/>
				);
			}
			return (
				<CryptoListItem key={coin.id} idx={idx + 1} onOpen={onOpen} {...coin} />
			);
		});
	};

	return (
		<>
			<Box>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th textAlign="center">No</Th>
							<Th textAlign="center">Name</Th>
							<Th textAlign="center">Price</Th>
							<Th textAlign="center">24h</Th>
							<Th textAlign="center">7d</Th>
							<Th textAlign="center">Market Cap</Th>
							<Th textAlign="center">Volumn</Th>
							<Th textAlign="center">Last 7 Days</Th>
							<Th textAlign="center">Action</Th>
						</Tr>
					</Thead>
					<Tbody>{renderTableRow()}</Tbody>
				</Table>
				{/* <PaginationButton
					totalPage={totalPage}
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
				/> */}
			</Box>
			<TransactionModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default Cryptos;
