import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from '../pages/Signin/Signin';
import { Signup } from '../pages/Signup/Signup';
import { Home } from '../pages/Home';
import {useAuth} from '../hooks/useAuth';

const Private = ({ Item }) => {
	const { signed } = useAuth();

	return signed > 0 ? <Item /> : <Signin />;
};

export const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route exact path='/home' element={<Private Item={Home} />} />
					<Route path='/' element={<Signin />}></Route>
					<Route exact path='/signup' element={<Signup />}></Route>
					<Route path='*' element={<Signin />}></Route>
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
};
