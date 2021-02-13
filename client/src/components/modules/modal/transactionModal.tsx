import {
	TabList,
	Tabs,
	Tab,
	TabPanels,
	TabPanel,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	FormControl,
	FormLabel,
	Box,
	Flex,
	Text,
	Button,
} from "@chakra-ui/react";
import React, { ReactElement, useEffect, useState } from "react";
import BasicModal from "./basicModal";
import { numberWithCommas } from "../../../utils/utils";

interface TransactionModalProps {
	isOpen: boolean;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
	isOpen,
}): ReactElement => {
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
		{
			id: "etherium",
			cryproIcon:
				"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
			cryptoName: "etherium",
			cryptoSymbol: "ETH",
			price: 3523.81,
			dayPercentage: 0.35,
			holdingsUSD: 4264.81,
			holdingsCrypto: 1,
			profit: -36.84,
			profitPercentage: 0.08,
		},
	];

	const [selected, setSeleted] = useState(data[0]);
	const [quantity, setQuantity] = useState<number>(0);
	const [pricePerCoin, setPricePerCoin] = useState<number>(selected.price);
	const [totalSpent, setTotalSpent] = useState<number>(0);

	useEffect(() => {
		setTotalSpent(quantity * pricePerCoin);
	}, [quantity, setQuantity, pricePerCoin, setPricePerCoin]);

	useEffect(() => {}, [selected, setSeleted]);

	const renderOptions = () => {
		return data.map((coin) => {
			return (
				<option
					key={coin.id}
					value={coin.id}
					onClick={() => setSeleted(coin)}
				>{`${coin.cryptoName} (${coin.cryptoSymbol})`}</option>
			);
		});
	};

	return (
		<BasicModal
			// isOpen={isOpen}
			modalTitle={"Add Transaction"}
			submitButtonName="Add Transaction"
			onSubmit={() => console.log("submit")}
		>
			<Tabs isFitted variant="soft-rounded" colorScheme="blue">
				<TabList>
					<Tab>Buy</Tab>
					<Tab>Sell</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<FormControl as="fieldset">
							<Select
								placeholder={`${selected.cryptoName} (${selected.cryptoSymbol})`}
								mt={5}
							>
								{renderOptions()}
							</Select>
							<Flex dir="row" my={3}>
								<Box mr={2}>
									<FormLabel>Quantity</FormLabel>
									<NumberInput
										defaultValue={0}
										precision={2}
										step={0.01}
										min={0}
										onChange={(_, valueAsNumber) =>
											setQuantity(valueAsNumber || 0)
										}
									>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</Box>
								<Box>
									<FormLabel>Price per Coin</FormLabel>
									<NumberInput
										defaultValue={numberWithCommas(pricePerCoin)}
										precision={8}
										min={0}
										onChange={(_, valueAsNumber) =>
											setPricePerCoin(valueAsNumber || 0)
										}
									>
										<NumberInputField />
									</NumberInput>
								</Box>
							</Flex>
							<Flex dir="row" justifyContent="space-between" my={5}>
								<Button>Calendar 2021/02/13</Button>
								<Button>Fee</Button>
								<Button>Note</Button>
							</Flex>
							<Box bgColor="gray.100" p={3} mt={5} borderRadius="md">
								<FormLabel>Total Spent</FormLabel>
								<Text fontWeight="bold" fontSize="2rem">
									{`$ ${numberWithCommas(Math.floor(totalSpent))}`}
								</Text>
							</Box>
						</FormControl>
					</TabPanel>
					{/* <TabPanel>
						<p>two!</p>
					</TabPanel> */}
				</TabPanels>
			</Tabs>
		</BasicModal>
	);
};

export default TransactionModal;

/* 
1. 리덕스 연결하기
2. 로컬스토리지 연결하기

*/
