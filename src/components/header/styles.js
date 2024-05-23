import styled from 'styled-components';

export const ContainerGeral = styled.div`
	header {
		display: flex;
		justify-content: space-evenly;
		background-color: #007bff;
		padding: 10px;
	}
	header ul {
		display: flex;
		align-items: center;
		gap: 25px;
		list-style: none;
	}

	header ul li {
		color: #fff;
	}

	header ul a {
		text-decoration: none;
	}
`;
