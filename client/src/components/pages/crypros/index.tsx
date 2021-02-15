import React, { useRef, useState, useCallback, RefObject } from "react";
import {
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	useDisclosure,
} from "@chakra-ui/react";
import CryptoListItem from "./cryptoListItem";
import { useGetCoinList } from "../../../utils/useGetCoinList";
import TransactionModal from "../../modules/modal/transactionModal";

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
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};
	// const { isOpen, onOpen } = useDisclosure();

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
		return data.map((coin, idx) => {
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
			// if (coins.length === idx + 1) {
			// 	return (
			// 		<div key={idx} ref={lastCoinElementRef}>
			// 			{coin.title}
			// 		</div>
			// 	);
			// }
			// return <div key={idx}>{coin.title}</div>;
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
							<Th>Action</Th>
						</Tr>
					</Thead>
					<Tbody>{renderTableRow()}</Tbody>
				</Table>
			</Box>
			<TransactionModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default Cryptos;
