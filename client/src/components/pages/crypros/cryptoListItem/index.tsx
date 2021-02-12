import { Flex, Td, Tr, Image, Text, Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { numberWithCommas } from "../../../../utils/utils";
import CrpytoLineChart from "./chart";

interface CryptoListItemProps {
	idx: number;
	id: string;
	cryproIcon: string;
	cryptoName: string;
	cryptoSymbol: string;
	price: number;
	dayPercentage: number;
	weekPercentage: number;
	marketCap: number;
	volumnUSD: number;
	volumnCrypto: number;
}

const CryptoListItem: React.FC<CryptoListItemProps> = ({
	idx,
	id,
	cryproIcon,
	cryptoName,
	cryptoSymbol,
	price,
	dayPercentage,
	weekPercentage,
	marketCap,
	volumnUSD,
	volumnCrypto,
}) => {
	return (
		<>
			<Tr>
				{/*No*/}
				<Td>{idx}</Td>

				{/*Name*/}
				<Td>
					<Flex dir="row" alignItems="center">
						<Image
							boxSize="1.5rem"
							src={cryproIcon}
							alt={`${cryptoName}'s Icon`}
							mr={2}
						></Image>
						<Text fontWeight="medium" mr={1}>
							{cryptoName}
						</Text>
						<Text color="gray">{cryptoSymbol}</Text>
					</Flex>
				</Td>

				{/*Price*/}
				<Td>
					<Text fontWeight="medium">{`$${numberWithCommas(price)}`}</Text>
				</Td>

				{/*24h*/}
				<Td>
					<Flex
						dir="row"
						alignItems="center"
						color={dayPercentage >= 0 ? "green" : "red"}
					>
						<Text mr={1}>
							{dayPercentage >= 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
						</Text>
						<Text>{`${numberWithCommas(Math.abs(dayPercentage))}%`}</Text>
					</Flex>
				</Td>

				{/*7d*/}
				<Td>
					<Flex
						dir="row"
						alignItems="center"
						color={weekPercentage >= 0 ? "green" : "red"}
					>
						<Text mr={1}>
							{weekPercentage >= 0 ? (
								<IoMdArrowDropup />
							) : (
								<IoMdArrowDropdown />
							)}
						</Text>
						<Text>{`${numberWithCommas(Math.abs(weekPercentage))}%`}</Text>
					</Flex>
				</Td>

				{/*market cap*/}
				<Td>
					<Text fontWeight="medium">{`$${numberWithCommas(marketCap)}`}</Text>
				</Td>

				{/*volumn*/}
				<Td>
					<Text fontWeight="medium">{`$${numberWithCommas(volumnUSD)}`}</Text>
					<Text fontSize="0.8rem" color="gray">{`${numberWithCommas(
						volumnCrypto
					)} ${cryptoSymbol}`}</Text>
				</Td>

				{/*last 7 days*/}
				<Td>
					<Box width="200px" height="50px">
						<CrpytoLineChart />
					</Box>
				</Td>

				{/* Actions */}
				<Td>
					{/* <Box align="center"> */}
					<IconButton
						variant="ghost"
						aria-label="action"
						icon={<BsThreeDotsVertical />}
						// onClick={onOpen}
					/>
					{/* </Box> */}
				</Td>
			</Tr>
		</>
	);
};

export default CryptoListItem;
