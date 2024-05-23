import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Signin } from '../pages/Signin/Signin';
import { Signup } from '../pages/Signup/Signup';
import { Home } from '../pages/Home/index';
import { CadastroNotas } from '../pages/CadastroNotas';
import { ExcluirNotas } from '../pages/ExcluirNotas';
import { PrivateRoute } from '../components/PrivateRoute';

export const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/signin' replace />} />{' '}
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/home' element={<PrivateRoute element={Home} />} />
				<Route path='/cadastronotas' element={<CadastroNotas />} />
				<Route path='/excluirnotas' element={<ExcluirNotas />} />
				<Route path='*' element={<Navigate to='/signin' replace />} />
			</Routes>
		</BrowserRouter>
	);
};
