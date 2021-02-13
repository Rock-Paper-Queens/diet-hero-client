import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const assetSlice = createSlice({
// 	name: "asset",
// 	initialState: [],
// 	reducers: {
// 		add: {
// 			reducer: (state, { payload }) => {
// 				state.push(payload);
// 			},
// 			// prepare: ({desc}) => {
// 			//   return {
// 			//     payload: {
// 			//       id: useOutsideClick(
// 			//     }
// 			//   }
// 			// }
// 		},
// 		edit: (state, { payload }: PayloadAction<{ id: string }>) => {
// 			const coin = state.find((coin) => coin.id === payload.id);
// 		},
// 		remove: (state, { payload }: PayloadAction<{ id: string }>) => {
// 			const Idx = state.findIndex((coin) => coin.id === payload.id);
// 			state.splice(Idx, 1);
// 		},
// 	},
//   extraReducers: {
//     [cryptoSlice.actions.realTimeEdit]: (state, action) => {

//     }
//   }
// });

// const cryptoSlice = createSlice({
//   name: "crytos",
//   initialState: [],
//   reducers: {
//     fetchMore: (state, {payload}) => {
//       state.push(...payload);
//     },
//     realTimeEdit: (state, {payload}) => {
//       state = payload;
//     }
//   }
// })

const modalOpen = createSlice({
	name: "modal",
	initialState: {
		isTransactionModalOpen: false,
		isCoinInfoModalOpen: false,
	},
	reducers: {
		transactionModalOpen: (state, action) => {
			state.isTransactionModalOpen = !state.isTransactionModalOpen;
		},
		isCoinInfoModalOpen: (state, action) => {
			state.isCoinInfoModalOpen = !state.isCoinInfoModalOpen;
		},
	},
});
