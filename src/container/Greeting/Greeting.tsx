import React, { useEffect, useState } from 'react'
import Form from '../../components/Form/Form'
import UserStatus from '../../components/UserStatus/UserStatus'

const Greeting = () => {
	const [name, setName] = useState(undefined)

	useEffect(() => {
		console.log('Name is ', name)
		if (name === 'unknown' || name === 'Unknown') {
			setName(undefined)
		}
	}, [name])

	const handleChange = (event: any) => {
		event.preventDefault()
		setName(event.target.value)
	}

	const handleSubmit = (event: any) => {
		event.preventDefault()
		console.log('The name submitted is :', name)
	}
	return (
		<div>
			<h2>Hello World !</h2>

			<Form
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				name={name}
			/>
			<UserStatus name={name} />
		</div>
	)
}
export default Greeting
