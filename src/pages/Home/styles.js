import styled from 'styled-components';

export const ContainerGeral = styled.div`
	width: 100%;
	margin: 0 auto;
`;

export const Container = styled.div`
	padding: 30px 0;
	width: 100%;
	max-width: 1020px;
	margin: 0 auto;
`;

export const SelectAluno = styled.select`
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

export const SelectBimestre = styled.select`
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 50px;

	th,
	td {
		border: 1px solid #ccc;
		padding: 10px;
		background-color: #007bff;
	}

	th {
		background-color: #007bff;
		color: #fff;
	}

	tr {
		background-color: #1b325f;
	}

	tr:hover {
		background-color: #1b3251;
	}
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

export const RemoveButton = styled.button`
	padding: 8px 12px;
	background-color: #f44336;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #d32f2f;
	}
`;

export const Btn = styled.div`
	margin-top: 20px;
`;
export const SearchByRaAndBimestre = styled.div`
	margin-bottom: 20px;

	label {
		margin-right: 10px;
		font-weight: bold;
		color: #1b325f;
	}

	input {
		padding: 8px;
		margin-right: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
	}
`;
export const P = styled.p`
	color: #1b325f;
`;
