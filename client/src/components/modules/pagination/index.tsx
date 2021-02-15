import { Flex, IconButton, Button } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PagenationButtonProps {
	pageNumber: number;
	totalPage: number;
	setPageNumber: (x: number) => void;
}

const PaginationButton: React.FC<PagenationButtonProps> = ({
	pageNumber,
	totalPage,
	setPageNumber,
}) => {
	const [pageRange, setPageRange] = useState<number[]>([]);

	const fillPageRange = (first = 1) => {
		let last =
			pageNumber > Math.floor(totalPage / 10) * 10 && pageNumber <= totalPage
				? totalPage % 10
				: 10;
		let pagePivot = Math.floor(pageNumber / 10);
		let newPageRange = [];
		for (let i = first; i <= last; i++) {
			newPageRange.push(i + pagePivot * 10);
		}
		setPageRange(newPageRange);
	};

	useEffect(() => {
		fillPageRange();
	}, [pageNumber]);

	const onClickPrevPageButton = () => {
		fillPageRange(Math.floor(pageNumber / 10) * 10 - 9);
		setPageNumber(pageRange[pageRange.length - 1]);
	};

	const renderPageButton = () => {
		return pageRange.map((page) => {
			return (
				<Button
					width={12}
					key={page}
					onClick={() => {
						setPageNumber(page);
						window.scrollTo(0, 0);
					}}
					bgColor="transparent"
					color={page === pageNumber ? "black" : "gray.400"}
				>
					{page}
				</Button>
			);
		});
	};

	return (
		<Flex justifyContent="center" mt={10}>
			<IconButton
				aria-label="previous page"
				icon={<IoIosArrowBack />}
				disabled={pageNumber / 10 < 1}
				onClick={onClickPrevPageButton}
			/>
			{renderPageButton()}
			<IconButton
				aria-label="next page"
				icon={<IoIosArrowForward />}
				disabled={pageNumber > (totalPage / 10) * 10 && pageNumber <= totalPage}
			/>
		</Flex>
	);
};

export default PaginationButton;
