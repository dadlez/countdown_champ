import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: '01 January 2018',
			newDeadline: ''
		}
	}

	changeDeadline() {
		this.setState({deadline: this.state.newDeadline})
	}


	render() {
		return(
			<div className='App'>
				<div className='App-title'>Odliczaj do: {this.state.deadline}</div>
				<Clock
					deadline= {this.state.deadline}
				/>
				<Form inline>
					<FormControl
						className='Deadline-input'
						placeholder="ie. 25 December 2017"
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<Button
						onClick={() => this.changeDeadline()}>zmień</Button>
				</Form>
			</div>
		)
	}
}

export default App;
