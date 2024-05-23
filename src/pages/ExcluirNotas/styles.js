import styled from 'styled-components';

export const PainelContainer = styled.div`
	background-color: #f2f2f2;
	padding: 20px;
	border-radius: 8px;
	margin-top: 20px;
`;

export const Input = styled.input`
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
`;

export const Button = styled.button`
	padding: 8px 16px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	margin-right: 10px;

	&:hover {
		background-color: #0056b3;
	}
`;

export const ErrorMessage = styled.p`
	color: red;
	margin-bottom: 10px;
`;

export const NotasList = styled.div`
	margin-top: 20px;
`;

export const NotaItem = styled.div`
	background-color: #495057;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 10px;
	margin-bottom: 10px;
`;

export const MateriasList = styled.ul`
	list-style: none;
	padding: 0;
`;

export const MateriaItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
	border-bottom: 1px solid #e0e0e0;

	&:last-child {
		border-bottom: none;
	}
`;

export const EditarInput = styled.input`
	padding: 8px;
	margin-right: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100px;
`;

export const SalvarButton = styled.button`
	padding: 8px 16px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #0056b3;
	}
`;

export const EditarButton = styled.button`
	padding: 8px 16px;
	background-color: #6c757d;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	margin-right: 10px;

	&:hover {
		background-color: #495057;
	}
`;

export const ExcluirButton = styled.button`
	padding: 8px 16px;
	background-color: #dc3545;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #c82333;
	}
`;
