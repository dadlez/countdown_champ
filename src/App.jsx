import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: "25 Grudzień 2017",
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
				<div>
					<div className='Clock-days'>15 dni</div>
					<div className='Clock-hours'>20 godzin</div>
					<div className='Clock-minutes'>30 minut</div>
					<div className='Clock-seconds'>10 sekund</div>
				</div>
				<div>
					<input
						placeholder="podaj datę"
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<button onClick={() => this.changeDeadline()}>zmień</button>
				</div>
			</div>
		)
	}
}

export default App;
