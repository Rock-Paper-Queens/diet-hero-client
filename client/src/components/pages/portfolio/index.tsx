import React from "react";
import PortfolioChart from "./chart";
import PortfolioAsset from "./asset";
import { Flex } from "@chakra-ui/react";

const Portfolio = () => {
	return (
		<Flex direction="row" h={400} justifyContent="center">
			<PortfolioChart />
			<PortfolioAsset />
		</Flex>
	);
};

export default Portfolio;
