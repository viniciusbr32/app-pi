import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element: Element }) => {
	const isAuthenticated = localStorage.getItem('user') !== null;

	return isAuthenticated ? <Element /> : <Navigate to='/signin' replace />;
};
