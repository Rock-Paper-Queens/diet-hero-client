import React, { useEffect } from "react";
import PortfolioChart from "./chart";
import PortfolioAsset from "./asset";
import { Flex } from "@chakra-ui/react";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { v4 as uuid } from "uuid";

const Portfolio = () => {
	const [id, setId] = useLocalStorage("id", null);
	useEffect(() => {
		if (!id) setId(uuid());
	}, [id]);

	return (
		<Flex direction="row" h={400} justifyContent="center">
			<PortfolioChart />
			<PortfolioAsset />
		</Flex>
	);
};

export default Portfolio;
