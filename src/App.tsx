import React from 'react'
import './App.css'
import HomePage from './container/HomePage/HomePage'
import './App.scss'
import Greeting from './container/Greeting/Greeting'
import Sum from './components/Sum/Sum'

function App() {
	return (
		<div className='App'>
			<HomePage />
			<Greeting />
			<Sum />
			<a href='https://www.robinwieruch.de/react-connected-component-test'>
				learn react
			</a>
		</div>
	)
}

export default App
