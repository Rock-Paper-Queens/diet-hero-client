import React from "react";
import Portfolio from "./components/pages/portfolio";
import Cryptos from "./components/pages/crypros";
// import TransactionModal from "./components/modules/modal/transactionModal";
import { Box, Flex, Heading } from "@chakra-ui/react";

function App() {
	return (
		<Flex
			className="App"
			flexDirection="column"
			justifyContent="center"
			align="center"
		>
			<Flex height="5rem" alignItems="center" mb={5}>
				<Heading as="h1">Cryptolio</Heading>
			</Flex>
			<Portfolio />
			<Cryptos />
			{/* <TransactionModal /> */}
		</Flex>
	);
}

export default App;
