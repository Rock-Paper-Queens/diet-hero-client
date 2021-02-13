import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import CryptoListItem from "./cryptoListItem";
import { numberWithCommas } from "../../../utils/utils";

const Cryptos = () => {
	const data = [
		{
			// market_cap_rank: 1,
			id: "bitcoin",
			cryproIcon:
				"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
			cryptoName: "Bitcoin",
			cryptoSymbol: "BTC",
			price: 45652.81,
			dayPercentage: 0.36,
			weekPercentage: -0.08,
			marketCap: 850338768910,
			volumnUSD: 18624392936,
			volumnCrypto: 1938593,
		},
	];

	const renderTableRow = () => {
		return data.map((coin, idx) => {
			return <CryptoListItem key={coin.id} idx={idx + 1} {...coin} />;
		});
	};

	return (
		<Box>
			<Table variant="simple">
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
			</Table>
		</Box>
	);
};

export default Cryptos;
