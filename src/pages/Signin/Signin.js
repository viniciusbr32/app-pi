import React, { useState } from 'react';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/Button/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';

export const Signin = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userType, setUserType] = useState('aluno');
	const [error, setError] = useState('');

	const handleLogin = async () => {
		try {
			const response = await fetch('http://localhost:5000/usuarios');
			if (!response.ok) {
				throw new Error('Erro ao buscar usuários');
			}

			const usuarios = await response.json();

			const usuario = usuarios.find(
				(user) =>
					user.email === email &&
					user.senha === password &&
					user.tipoUsuario === userType
			);

			if (usuario) {
				localStorage.setItem('user', JSON.stringify(usuario));

				navigate('/home');
			} else {
				setError('E-mail, senha ou tipo de usuário incorretos');
			}
		} catch (error) {
			console.error('Erro ao fazer login:', error);
			setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
		}
	};

	return (
		<C.Container>
			<C.Label>LOGIN - PROJETO INTEGRADOR</C.Label>
			<C.Content>
				<Input
					type='email'
					placeholder='Digite seu E-mail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type='password'
					placeholder='Digite sua Senha'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<C.Select
					value={userType}
					onChange={(e) => setUserType(e.target.value)}
				>
					<option value='aluno'>Aluno</option>
					<option value='professor'>Professor</option>
				</C.Select>
				<C.labelError>{error}</C.labelError>
				<Button text='Entrar' onClick={handleLogin} />

				<C.LabelSignup>
					Não tem uma conta?
					<C.Strong>
						<Link to='/signup'>&nbsp;Registre-se</Link>
					</C.Strong>
				</C.LabelSignup>
			</C.Content>
		</C.Container>
	);
};
