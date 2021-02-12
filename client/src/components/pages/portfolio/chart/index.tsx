import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
// import LineChart from "./lineChart";

const PortfolioChart = () => {
	return (
		<Box width={400} height={400}>
			<Heading as="h3" fontSize="1.5rem">
				Chart
			</Heading>
			<VictoryChart theme={VictoryTheme.grayscale}>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						// parent: { border: "1px solid #ccc" },
					}}
					data={[
						{ x: 1, y: 2 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 7 },
					]}
				/>
			</VictoryChart>
		</Box>
	);
};

export default PortfolioChart;
