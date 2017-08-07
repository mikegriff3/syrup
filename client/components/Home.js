import React from 'react';
import NavBar from './NavBar';
import NavBarLogin from './NavBarLogin';
import HomePage from './HomePage';

export default class Home extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="intro-message">
				<h1>Welcome to Syrup!</h1>
				<NavBarLogin/>
				<HomePage/>
			</div>
		);
	}
}
