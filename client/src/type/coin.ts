export interface CoinType {
	id: string;
	market_cap_rank: number;
	image: string;
	name: string;
	symbol: string;
	price: number;
	price_change_percentage_24h: number;
	price_change_percentage_7d: number;
	market_cap: number;
	total_volume: number;
	chart_data: string[];
	// title: string;
}
