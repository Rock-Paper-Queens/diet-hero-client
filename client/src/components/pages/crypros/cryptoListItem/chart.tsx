import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const CrpytoLineChart = () => {
	return (
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
				{ x: 6, y: 1 },
				{ x: 7, y: 5 },
			]}
		/>
	);
};

export default CrpytoLineChart;
