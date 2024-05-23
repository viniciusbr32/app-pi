import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
import * as C from './styles';
import { Header } from '../../components/header';

export const CadastroNotas = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const links = [
		{ to: '/home', text: 'Visualizar Notas', color: 'white' },
		{ to: '/excluirnotas', text: 'Editar/Excluir Notas', color: 'white' },
	];

	return (
		<>
			<Header links={links} />
			<C.Container>
				<C.Button onClick={handleOpenModal}>Cadastrar Notas</C.Button>{' '}
				<Modal isOpen={isOpen} onClose={handleCloseModal} />
			</C.Container>
		</>
	);
};
