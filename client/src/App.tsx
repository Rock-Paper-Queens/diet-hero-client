import React from "react";
// import Portfolio from "./components/pages/portfolio";
import Cryptos from "./components/pages/crypros";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { TiChartLine } from "react-icons/ti";

function App() {
	return (
		<Flex
			className="App"
			flexDirection="column"
			justifyContent="center"
			align="center"
		>
			<Flex height="5rem" alignItems="center" mb={5}>
				<Heading as="h1" fontFamily="monospace">
					<Flex dic="row" alignItems="center">
						<TiChartLine />
						<Text ml={1}>CRYPTOLIO</Text>
					</Flex>
				</Heading>
			</Flex>
			{/* <Portfolio /> */}
			<Cryptos />
		</Flex>
	);
}

export default App;
