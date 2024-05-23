import React, { useState } from 'react';
import * as C from './styles';

export const Modal = ({ isOpen, onClose }) => {
	const [aluno, setAluno] = useState('');
	const [ra, setRa] = useState('');
	const [bimestre, setBimestre] = useState('1');
	const [materias, setMaterias] = useState([
		{ nome: 'Matemática', nota: '', falta: '' },
		{ nome: 'Português', nota: '', falta: '' },
		{ nome: 'História', nota: '', falta: '' },
		{ nome: 'Geografia', nota: '', falta: '' },
		{ nome: 'Biologia', nota: '', falta: '' },
		{ nome: 'Física', nota: '', falta: '' },
		{ nome: 'Inglês', nota: '', falta: '' },
		{ nome: 'Filosofia', nota: '', falta: '' },
		{ nome: 'Sociologia', nota: '', falta: '' },
		{ nome: 'Ed Fisica', nota: '', falta: '' },
		{ nome: 'Química', nota: '', falta: '' },
	]);

	const verificarNotaExistente = () => {
		return materias.some((materia) => {
			return materia.nota !== '' && isNaN(Number(materia.nota));
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (verificarNotaExistente()) {
			alert('Alguma matéria possui uma nota inválida.');
			return;
		}

		try {
			const response = await fetch('http://localhost:5000/notas', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					aluno,
					ra,
					bimestre,
					materias,
				}),
			});

			if (!response.ok) {
				throw new Error('Erro ao enviar dados para a API');
			}

			alert('Dados enviados com sucesso!');
			onClose();
		} catch (error) {
			console.error('Erro ao enviar dados para a API:', error);
			alert(
				'Erro ao enviar dados para a API. Verifique o console para mais detalhes.'
			);
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<C.ModalContainer isOpen={isOpen}>
			<C.ModalContent>
				<C.CloseButton onClick={onClose}>&times;</C.CloseButton>
				<C.ModalHeader>Cadastro de Notas e Faltas</C.ModalHeader>
				<C.Form onSubmit={handleSubmit}>
					<C.Label>
						Nome do Aluno:
						<C.Input
							type='text'
							value={aluno}
							onChange={(e) => setAluno(e.target.value)}
						/>
					</C.Label>
					<C.Label>
						RA do Aluno:
						<C.Input
							type='number'
							value={ra}
							onChange={(e) => setRa(e.target.value)}
						/>
					</C.Label>
					<C.Label>
						Bimestre:
						<C.Select
							value={bimestre}
							onChange={(e) => setBimestre(e.target.value)}
						>
							<option value='1'>1º Bimestre</option>
							<option value='2'>2º Bimestre</option>
							<option value='3'>3º Bimestre</option>
							<option value='4'>4º Bimestre</option>
						</C.Select>
					</C.Label>
					<C.MateriasContainer>
						{materias.map((materia, index) => (
							<C.MateriaItem key={index}>
								<C.Label>
									{materia.nome} - Nota:
									<C.Input
										type='text'
										value={materia.nota}
										onChange={(e) => {
											const newMaterias = [...materias];
											newMaterias[index].nota = e.target.value;
											setMaterias(newMaterias);
										}}
									/>
								</C.Label>
								<C.Label>
									{materia.nome} - Falta:
									<C.Input
										type='text'
										value={materia.falta}
										onChange={(e) => {
											const newMaterias = [...materias];
											newMaterias[index].falta = e.target.value;
											setMaterias(newMaterias);
										}}
									/>
								</C.Label>
							</C.MateriaItem>
						))}
					</C.MateriasContainer>
					<C.Button type='submit'>Enviar Dados</C.Button>
				</C.Form>
			</C.ModalContent>
		</C.ModalContainer>
	);
};
