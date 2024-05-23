import React, { useState } from 'react';

export const NotasProvider = ({ children }) => {
	const [notas, setNotas] = useState([]);

	const adicionarNota = (novaNota) => {
		setNotas([...notas, novaNota]);
	};

	return <div>{children({ notas, adicionarNota })}</div>;
};
