import React, { ReactElement } from "react";
import BasicModal from "./basicModal";

const TransactionModal = (): ReactElement => {
	return (
		<BasicModal
			modalTitle={"Add Transaction"}
			submitButtonName="Add Transaction"
			onSubmit={() => console.log("submit")}
		>
			<div>Hello</div>
		</BasicModal>
	);
};

export default TransactionModal;
