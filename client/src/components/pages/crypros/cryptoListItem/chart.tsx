import React from "react";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";

const CrpytoLineChart = ({ strokeColor }: { strokeColor: string }) => {
	return (
		// <VictoryChart theme={VictoryTheme.material}>
		// <VictoryAxis>
		<VictoryLine
			style={{
				data: { stroke: strokeColor, strokeWidth: 10 },
				// parent: { border: "1px solid #ccc" },
			}}
			data={[
				{ x: 1612656000000, y: 39279.41286897885 },
				{ x: 1612742400000, y: 38833.34026455532 },
				{ x: 1612828800000, y: 46307.57412159395 },
				{ x: 1612915200000, y: 46569.56483 },
				{ x: 1613001600000, y: 44848.69344950499 },
				{ x: 1613088000000, y: 47815.96175554316 },
				{ x: 1613174400000, y: 47414.1862550079 },
				{ x: 1613215142000, y: 46650.91705037534 },
			]}
			width={1200}
			height={500}
		/>
		// </VictoryAxis>
		// </VictoryChart>
	);
};

export default CrpytoLineChart;
