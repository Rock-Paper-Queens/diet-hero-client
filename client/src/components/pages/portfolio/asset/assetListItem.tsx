import React from "react";
import { Td, Tr, IconButton, Flex, Image, Text, Box } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { numberWithCommas } from "../../../../utils/utils";

interface AssetListItemProps {
	id: string;
	cryproIcon: string;
	cryptoName: string;
	cryptoSymbol: string;
	price: number;
	dayPercentage: number;
	holdingsUSD: number;
	holdingsCrypto: number;
	profit: number;
	profitPercentage: number;
	onOpen: () => void;
}

const AssetListItem: React.FC<AssetListItemProps> = ({
	id,
	cryproIcon,
	cryptoName,
	cryptoSymbol,
	price,
	dayPercentage,
	holdingsUSD,
	holdingsCrypto,
	profit,
	profitPercentage,
	onOpen,
}) => {
	return (
		<Tr fontSize="0.9rem">
			{/* NAME */}
			<Td>
				<Flex dir="row" alignItems="center">
					<Image
						boxSize="2rem"
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

			{/* Price */}
			<Td isNumeric>
				<Text fontWeight="medium">{`$${numberWithCommas(price)}`}</Text>
			</Td>

			{/* 24H */}
			<Td>
				<Flex
					dir="row"
					alignItems="center"
					color={dayPercentage >= 0 ? "green" : "red"}
				>
					<Text mr={1}>
						{dayPercentage >= 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
					</Text>
					<Text>{`${dayPercentage}%`}</Text>
				</Flex>
			</Td>

			{/* Holdings */}
			<Td isNumeric>
				<Text fontWeight="medium">{`$${numberWithCommas(holdingsUSD)}`}</Text>
				<Text fontSize="0.8rem" color="gray">{`${numberWithCommas(
					holdingsCrypto
				)} ${cryptoSymbol}`}</Text>
			</Td>

			{/* Profit/Loss */}
			<Td isNumeric>
				<Text fontWeight="medium">{`${
					profit < 0 ? "-" : null
				} $${numberWithCommas(Math.abs(profit))}`}</Text>
				<Flex
					dir="row"
					alignItems="center"
					color={profitPercentage >= 0 ? "green" : "red"}
					justifyContent="flex-end"
				>
					<Text mr={1}>
						{profitPercentage >= 0 ? (
							<IoMdArrowDropup />
						) : (
							<IoMdArrowDropdown />
						)}
					</Text>
					<Text fontSize="0.8rem">{`${numberWithCommas(
						profitPercentage
					)}%`}</Text>
				</Flex>
			</Td>

			{/* Actions */}
			<Td>
				<Box align="center">
					<IconButton
						variant="ghost"
						aria-label="action"
						icon={<BsThreeDotsVertical />}
						onClick={onOpen}
					/>
				</Box>
			</Td>
		</Tr>
	);
};

export default AssetListItem;
