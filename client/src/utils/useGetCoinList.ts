import { CoinType } from "./../type/coin";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetCoinList = (pageNumber: number) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [coins, setCoins] = useState<CoinType[]>([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);

		let cancel: () => void;
		axios({
			method: "GET",
			url: "http://openlibrary.org/search.json",
			params: { q: "coin", page: pageNumber },
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				console.log(res.data);
				setCoins([...coins, ...res.data.docs]);
				setHasMore(res.data.docs.length > 0);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setError(true);
			});

		return () => cancel();
	}, [pageNumber]);

	return { loading, error, coins, hasMore };
};
