import React from "react";
import Portfolio from "./components/pages/portfolio";
import Cryptos from "./components/pages/crypros";
import TransactionModal from "./components/modules/modal/transactionModal";
import { Box, Heading } from "@chakra-ui/react";

function App() {
	return (
		<Box className="App">
			<Heading as="h1">Cryptolio</Heading>
			<Portfolio />
			<Cryptos />
			{/* <TransactionModal /> */}
		</Box>
	);
}

export default App;
