import React, { useState } from 'react';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/Button/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
	const [email, setEmail] = useState('');
	const [emailConf, setEmailConf] = useState('');
	const [senha, setSenha] = useState('');
	const [tipoUsuario, setTipoUsuario] = useState('aluno');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSignup = async () => {
		if (!email || !emailConf || !senha) {
			setError('Preencha todos os campos');
			return;
		} else if (email !== emailConf) {
			setError('Os e-mails não são iguais');
			return;
		}

		try {
			const response = await fetch('http://localhost:5000/usuarios', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, senha, tipoUsuario }),
			});

			if (!response.ok) {
				throw new Error('Erro ao cadastrar usuário');
			}

			alert('Usuário cadastrado com sucesso!');
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<C.Container>
			<C.Label>SISTEMA DE LOGIN</C.Label>
			<C.Content>
				<Input
					type='email'
					placeholder='Digite seu E-mail'
					value={email}
					onChange={(e) => [setEmail(e.target.value), setError('')]}
				/>
				<Input
					type='email'
					placeholder='Confirme seu E-mail'
					value={emailConf}
					onChange={(e) => [setEmailConf(e.target.value), setError('')]}
				/>
				<Input
					type='password'
					placeholder='Digite sua Senha'
					value={senha}
					onChange={(e) => [setSenha(e.target.value), setError('')]}
				/>
				<C.Select // Utilizando o componente de select estilizado
					value={tipoUsuario}
					onChange={(e) => setTipoUsuario(e.target.value)}
				>
					<C.Option value='aluno'>Aluno</C.Option>
					<C.Option value='professor'>Professor</C.Option>
				</C.Select>
				<C.labelError>{error}</C.labelError>
				<Button text='Inscrever-se' onClick={handleSignup} />
				<C.LabelSignin>
					Já tem uma conta?
					<C.Strong>
						<Link to='/'>&nbsp;Entre</Link>
					</C.Strong>
				</C.LabelSignin>
			</C.Content>
		</C.Container>
	);
};
