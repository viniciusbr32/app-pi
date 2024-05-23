import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	background: #1e90ff;
	height: 100vh;
`;

export const Content = styled.div`
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	box-shadow: 0 1px 2px #0003;
	background-color: white;
	max-width: 350px;
	padding: 20px;
	border-radius: 5px;
`;

export const Label = styled.label`
	font-size: 18px;
	font-weight: 600;
	color: #fff;
`;

export const LabelSignin = styled.label`
	font-size: 16px;
	color: #676767;
`;

export const labelError = styled.label`
	font-size: 14px;
	color: red;
`;

export const Strong = styled.strong`
	cursor: pointer;

	a {
		text-decoration: none;
		color: #676767;
	}
`;

export const Select = styled.select`
	width: 100%;
	padding: 0.5rem;
	font-size: 1rem;
	margin-bottom: 1rem;
`;

export const Option = styled.option`
	font-size: 1rem;
`;
