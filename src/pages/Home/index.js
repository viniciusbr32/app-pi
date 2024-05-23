import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import * as C from './styles';

import { Header } from '../../components/header';

export function Home() {
	const [notas, setNotas] = useState([]);
	const [selectedRa, setSelectedRa] = useState('');
	const [selectedBimestre, setSelectedBimestre] = useState('');
	const [selectedAlunoNome, setSelectedAlunoNome] = useState('');
	const [selectedAlunoNotas, setSelectedAlunoNotas] = useState([]);
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('http://localhost:5000/notas')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro ao buscar as notas');
				}
				return response.json();
			})
			.then((data) => {
				setNotas(data);
			})
			.catch((error) => {
				console.error('Erro ao buscar as notas:', error);
				setMessage(
					'Erro ao buscar as notas. Verifique o console para mais detalhes.'
				);
			});
	}, []);

	function handleSearchByRaAndBimestre() {
		const aluno = notas.find(
			(nota) => nota.ra === selectedRa && nota.bimestre === selectedBimestre
		);
		if (aluno) {
			setSelectedAlunoNome(aluno.aluno);
			setSelectedAlunoNotas(aluno.materias);
		} else {
			setSelectedAlunoNome('');
			setSelectedAlunoNotas([]);
			setMessage('Nenhuma nota encontrada para o RA e bimestre especificados');
		}
	}

	const links = [
		{ to: '/cadastronotas', text: 'Cadastrar Notas', color: 'white' },
		{ to: '/excluirnotas', text: 'Editar/Excluir Notas', color: 'white' },
	];

	return (
		<C.ContainerGeral>
			<Header links={links} />
			<C.Container>
				{message && <p>{message}</p>}
				<C.SearchByRaAndBimestre>
					<label htmlFor='raInput'>Buscar por RA:</label>
					<input
						id='raInput'
						type='text'
						value={selectedRa}
						onChange={(e) => setSelectedRa(e.target.value)}
					/>
					<label htmlFor='bimestreInput'>Bimestre:</label>
					<input
						id='bimestreInput'
						type='text'
						value={selectedBimestre}
						onChange={(e) => setSelectedBimestre(e.target.value)}
					/>
					<Button onClick={handleSearchByRaAndBimestre} text='Buscar' />
				</C.SearchByRaAndBimestre>
				{selectedAlunoNome && <C.P>Aluno: {selectedAlunoNome}</C.P>}
				{selectedAlunoNotas.length > 0 && (
					<div>
						<C.Table>
							<thead>
								<tr>
									<th>Disciplina</th>
									<th>Nota</th>
									<th>Falta</th>
								</tr>
							</thead>
							<tbody>
								{selectedAlunoNotas.map((materia, index) => (
									<tr key={index}>
										<td>{materia.nome}</td>
										<td>{materia.nota || '-'}</td>
										<td>{materia.falta || '-'}</td>
									</tr>
								))}
							</tbody>
						</C.Table>
					</div>
				)}
			</C.Container>
		</C.ContainerGeral>
	);
}
