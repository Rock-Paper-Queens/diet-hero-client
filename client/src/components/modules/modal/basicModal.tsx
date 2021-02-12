import React, { ReactElement } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";

interface BasicModalProps {
	// isOpen: boolean;
	onOpen?: () => void;
	children: ReactElement;
	modalTitle: string;
	submitButtonName: string;
	onSubmit: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({
	// isOpen,
	onOpen,
	children,
	modalTitle,
	submitButtonName,
	onSubmit,
}) => {
	const { isOpen, onClose } = useDisclosure();

	const handleSubmitButtonClick = () => {
		onSubmit();
		onClose();
	};

	return (
		<>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{modalTitle}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{children}</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							onClick={handleSubmitButtonClick}
							isFullWidth
						>
							{submitButtonName}
						</Button>
						{/* <Button variant="ghost">Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default BasicModal;
