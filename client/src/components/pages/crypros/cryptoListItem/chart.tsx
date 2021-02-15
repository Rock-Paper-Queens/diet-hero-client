import React from "react";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";

const CrpytoLineChart = ({
	strokeColor,
	chartData,
}: {
	strokeColor: string;
	chartData: string[];
}) => {
	return (
		// <VictoryChart theme={VictoryTheme.material}>
		// <VictoryAxis>
		<VictoryLine
			style={{
				data: { stroke: strokeColor, strokeWidth: 10 },
				// parent: { border: "1px solid #ccc" },
			}}
			data={chartData.map((el) => JSON.parse(el))}
			width={1200}
			height={500}
		/>
		// </VictoryAxis>
		// </VictoryChart>
	);
};

export default CrpytoLineChart;
