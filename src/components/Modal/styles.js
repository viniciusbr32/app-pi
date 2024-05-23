import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
	background-color: #0056b3;
	margin: 5% auto;
	padding: 10px;
	border: 1px solid #888;
	width: 90%;
	max-width: 550px;
	height: 550px;
	border-radius: 10px;
	overflow-y: auto;
`;

export const CloseButton = styled.span`
	color: #aaa;
	float: right;
	font-size: 20px;
	font-weight: bold;
	padding: 5px;

	&:hover {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
`;

export const ModalHeader = styled.h2`
	margin-bottom: 10px;
	font-size: 22px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: 5px;
	font-size: 16px;
`;

export const SearchByRa = styled.div`
	margin-bottom: 20px;

	label {
		margin-right: 10px;
	}

	input {
		padding: 8px;
		border-radius: 4px;
		border: 1px solid #ccc;
	}
`;

export const Input = styled.input`
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	display: block;
	width: calc(100% - 16px);
	font-size: 14px;
`;

export const Select = styled.select`
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: calc(100% - 16px);
	font-size: 14px;
`;

export const Button = styled.button`
	padding: 8px 16px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;
	font-size: 16px;
	margin-top: 10px;

	&:hover {
		background-color: #0056b3;
	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;

export const MateriasContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`;

export const MateriaItem = styled.div`
	border: 1px solid #ccc;
	padding: 10px;
	border-radius: 4px;
`;
