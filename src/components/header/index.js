import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

export function Header(props) {
	return (
		<C.ContainerGeral>
			<header>
				<span>Gerenciamento Nota escolar</span>
				<ul>
					{props.links.map((link, index) => (
						<li key={index}>
							<Link to={link.to} style={{ color: link.color }}>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</header>
		</C.ContainerGeral>
	);
}
