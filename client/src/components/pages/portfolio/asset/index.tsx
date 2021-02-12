import React from "react";
import {
	Box,
	Heading,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	useDisclosure,
} from "@chakra-ui/react";
import AssetListItem from "./assetListItem";
import TransactionModal from "../../../modules/modal/transactionModal";

const Asset = () => {
	const data = [
		{
			id: "bitcoin",
			cryproIcon:
				"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
			cryptoName: "Bitcoin",
			cryptoSymbol: "BTC",
			price: 45652.81,
			dayPercentage: 0.36,
			holdingsUSD: 45652.81,
			holdingsCrypto: 1,
			profit: -36.84,
			profitPercentage: 0.08,
		},
	];

	const { onOpen } = useDisclosure();

	const renderTableRow = () => {
		return data.map((coin) => {
			return <AssetListItem key={coin.id} onOpen={onOpen} {...coin} />;
		});
	};

	return (
		<>
			<Box>
				<Heading as="h3" fontSize="1.5rem">
					My Assets
				</Heading>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Price</Th>
							<Th>24h</Th>
							<Th>holdings</Th>
							<Th>Profit/Loss</Th>
							<Th>Actions</Th>
							{/* <Th isNumeric>multiply by</Th> */}
						</Tr>
					</Thead>
					<Tbody>
						{renderTableRow()}
						{/* <Tr>
							<Td>inches</Td>
							<Td>millimetres (mm)</Td>
							<Td isNumeric>25.4</Td>
						</Tr>
						<Tr>
							<Td>feet</Td>
							<Td>centimetres (cm)</Td>
							<Td isNumeric>30.48</Td>
						</Tr>
						<Tr>
							<Td>yards</Td>
							<Td>metres (m)</Td>
							<Td isNumeric>0.91444</Td>
						</Tr> */}
					</Tbody>
				</Table>
			</Box>
			<TransactionModal />
		</>
	);
};

export default Asset;
