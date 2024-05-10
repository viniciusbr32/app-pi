import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as C from './styles';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {
	const { signout } = useAuth();
	const navigate = useNavigate();

	return (
		<C.Container>
			<C.Header>
				<h1>lalalalla</h1>
			</C.Header>
		</C.Container>
	);
};
