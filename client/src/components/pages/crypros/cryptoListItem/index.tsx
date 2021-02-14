// import { Flex, Td, Tr, Image, Text, Box, IconButton } from "@chakra-ui/react";
// import React from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
// import { CoinType } from "../../../../type/coin";
// import { numberWithCommas } from "../../../../utils/utils";
// import CrpytoLineChart from "./chart";

// interface CryptoListItemProps extends CoinType {
// 	idx: number;
// 	// volumnCrypto: number;
// }

// const CryptoListItem: React.FC<CryptoListItemProps> = ({
// 	idx,
// 	id,
// 	image,
// 	name,
// 	symbol,
// 	price_change_percentage_24h,
// 	price_change_percentage_7d,
// 	market_cap,
// 	total_volume,
// 	// volumnCrypto,
// }) => {
// 	return (
// 		<>
// 			<Tr>
// 				{/*No*/}
// 				<Td>{idx}</Td>

// 				{/*Name*/}
// 				<Td>
// 					<Flex dir="row" alignItems="center">
// 						<Image
// 							boxSize="1.5rem"
// 							src={image}
// 							alt={`${name}'s Icon`}
// 							mr={2}
// 						></Image>
// 						<Text fontWeight="medium" mr={1}>
// 							{name}
// 						</Text>
// 						<Text color="gray">{symbol}</Text>
// 					</Flex>
// 				</Td>

// 				{/*Price*/}
// 				<Td></Td>

// 				{/*24h*/}
// 				<Td>
// 					<Flex
// 						dir="row"
// 						alignItems="center"
// 						color={price_change_percentage_24h >= 0 ? "green" : "red"}
// 					>
// 						<Text mr={1}>
// 							{price_change_percentage_24h >= 0 ? (
// 								<IoMdArrowDropup />
// 							) : (
// 								<IoMdArrowDropdown />
// 							)}
// 						</Text>
// 						<Text>{`${numberWithCommas(
// 							Math.abs(price_change_percentage_24h)
// 						)}%`}</Text>
// 					</Flex>
// 				</Td>

// 				{/*7d*/}
// 				<Td>
// 					<Flex
// 						dir="row"
// 						alignItems="center"
// 						color={price_change_percentage_7d >= 0 ? "green" : "red"}
// 					>
// 						<Text mr={1}>
// 							{price_change_percentage_7d >= 0 ? (
// 								<IoMdArrowDropup />
// 							) : (
// 								<IoMdArrowDropdown />
// 							)}
// 						</Text>
// 						<Text>{`${numberWithCommas(
// 							Math.abs(price_change_percentage_7d)
// 						)}%`}</Text>
// 					</Flex>
// 				</Td>

// 				{/*market cap*/}
// 				<Td>
// 					<Text fontWeight="medium">{`$${numberWithCommas(market_cap)}`}</Text>
// 				</Td>

// 				{/*volumn*/}
// 				<Td>
// 					<Text fontWeight="medium">{`$${numberWithCommas(
// 						total_volume
// 					)}`}</Text>
// 					{/* <Text fontSize="0.8rem" color="gray">{`${numberWithCommas(
// 						// volumnCrypto
// 					)} ${symbol}`}</Text> */}
// 				</Td>

// 				{/*last 7 days*/}
// 				<Td>
// 					<Box width="200px" height="50px">
// 						<CrpytoLineChart />
// 					</Box>
// 				</Td>

// 				{/* Actions */}
// 				<Td>
// 					{/* <Box align="center"> */}
// 					<IconButton
// 						variant="ghost"
// 						aria-label="action"
// 						icon={<BsThreeDotsVertical />}
// 						// onClick={onOpen}
// 					/>
// 					{/* </Box> */}
// 				</Td>
// 			</Tr>
// 		</>
// 	);
// };

// export default CryptoListItem;
export {};
