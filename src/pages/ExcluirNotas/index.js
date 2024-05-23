import React, { useState } from 'react';
import * as C from './styles';
import { Header } from '../../components/header';

export const ExcluirNotas = () => {
	const [raAluno, setRaAluno] = useState('');
	const [bimestre, setBimestre] = useState('');
	const [notasEncontradas, setNotasEncontradas] = useState([]);
	const [erro, setErro] = useState('');
	const [edicaoNota, setEdicaoNota] = useState({
		notaIndex: null,
		materiaIndex: null,
		novaNota: '',
	});

	const handleBuscarNotas = () => {
		fetch(`http://localhost:5000/notas?ra=${raAluno}&bimestre=${bimestre}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro ao buscar notas');
				}
				return response.json();
			})
			.then((data) => {
				console.log('Dados das notas encontradas:', data);
				setNotasEncontradas(data);
			})
			.catch((error) => {
				console.error('Erro ao buscar notas:', error);
				setErro(
					'Erro ao buscar notas. Verifique o console para mais detalhes.'
				);
			});
	};

	const handleExcluirNotaPorId = (id) => {
		fetch(`http://localhost:5000/notas/${id}`, {
			method: 'DELETE',
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro ao excluir nota');
				}
				setNotasEncontradas(notasEncontradas.filter((nota) => nota.id !== id));
				console.log('Nota excluída com sucesso. ID:', id);
			})
			.catch((error) => {
				console.error('Erro ao excluir nota:', error);
				alert('Erro ao excluir nota. Verifique o console para mais detalhes.');
			});
	};

	const handleEditarNota = (notaIndex, materiaIndex) => {
		setEdicaoNota({
			notaIndex: notaIndex,
			materiaIndex: materiaIndex,
			novaNota: '',
		});
	};

	const handleSalvarEdicao = () => {
		if (edicaoNota.notaIndex === null || edicaoNota.materiaIndex === null) {
			console.error('Índices da nota ou da matéria não definidos');
			return;
		}

		const notasAtualizadas = [...notasEncontradas];
		notasAtualizadas[edicaoNota.notaIndex].materias[
			edicaoNota.materiaIndex
		].nota = edicaoNota.novaNota;

		fetch(
			`http://localhost:5000/notas/${
				notasEncontradas[edicaoNota.notaIndex].id
			}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(notasAtualizadas[edicaoNota.notaIndex]),
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro ao editar nota');
				}
				console.log(
					'Nota editada com sucesso. ID:',
					notasEncontradas[edicaoNota.notaIndex].id
				);
				setNotasEncontradas(notasAtualizadas);
				setEdicaoNota({ notaIndex: null, materiaIndex: null, novaNota: '' });
			})
			.catch((error) => {
				console.error('Erro ao editar nota:', error);
				alert('Erro ao editar nota. Verifique o console para mais detalhes.');
			});
	};

	const links = [
		{ to: '/home', text: 'Visualizar Notas', color: 'white' },
		{ to: '/cadastronotas', text: 'Cadastrar Notas', color: 'white' },
	];

	return (
		<>
			<Header links={links} />
			<C.PainelContainer>
				<C.Input
					type='text'
					value={raAluno}
					onChange={(e) => setRaAluno(e.target.value)}
					placeholder='Digite o RA do aluno'
				/>
				<select value={bimestre} onChange={(e) => setBimestre(e.target.value)}>
					<option value=''>Selecione o bimestre</option>
					<option value='1'>1º Bimestre</option>
					<option value='2'>2º Bimestre</option>
					<option value='3'>3º Bimestre</option>
					<option value='4'>4º Bimestre</option>
				</select>
				<C.Button onClick={handleBuscarNotas}>Buscar Notas</C.Button>
				{erro && <C.ErrorMessage>{erro}</C.ErrorMessage>}
				<C.NotasList>
					{notasEncontradas &&
						notasEncontradas.map((nota, notaIndex) => (
							<C.NotaItem key={nota.id}>
								<p>Aluno: {nota.aluno}</p>
								<p>Bimestre: {nota.bimestre}</p>
								<C.MateriasList>
									{nota.materias.map((materia, materiaIndex) => (
										<C.MateriaItem key={materia.id}>
											<p>
												{materia.nome}: {materia.nota}
											</p>
											{edicaoNota.notaIndex === notaIndex &&
											edicaoNota.materiaIndex === materiaIndex ? (
												<div>
													<C.EditarInput
														type='text'
														value={edicaoNota.novaNota}
														onChange={(e) =>
															setEdicaoNota({
																...edicaoNota,
																novaNota: e.target.value,
															})
														}
														placeholder='Digite a nova nota'
													/>
													<C.SalvarButton onClick={handleSalvarEdicao}>
														Salvar
													</C.SalvarButton>
												</div>
											) : (
												<C.EditarButton
													onClick={() =>
														handleEditarNota(notaIndex, materiaIndex)
													}
												>
													Editar
												</C.EditarButton>
											)}
										</C.MateriaItem>
									))}
								</C.MateriasList>
								<C.ExcluirButton
									onClick={() => handleExcluirNotaPorId(nota.id)}
								>
									Excluir
								</C.ExcluirButton>
							</C.NotaItem>
						))}
				</C.NotasList>
			</C.PainelContainer>
		</>
	);
};
