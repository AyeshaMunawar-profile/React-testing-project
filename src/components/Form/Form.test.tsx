import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('From is rendering correct values for respective input', () => {
	// test('Renders Form with the value entered if it is other than unknown', () => {
	// 	// Step1: Arrange
	// 	render(<Form name='Ayesha' />)
	// 	// Step2: Act
	// 	const buttonElement = screen.getByRole('button')
	// 	userEvent.click(buttonElement)
	// 	// Step3: Assert
	// 	const outputElement = screen.getByText(
	// 		'Its good to see you Ayesha ... How are you?',
	// 		{ exact: false }
	// 	)
	// 	expect(outputElement).toBeInTheDocument()
	// })

	test('Doesnot renders default value if the value is entered in input other than unknown', () => {
		// Step1: Arrange
		render(<Form name='Ayesha' handleChange={null} handleSubmit={null} />)
		// Step2: Act
		const buttonElement = screen.getByRole('button')
		userEvent.click(buttonElement)
		// Step3: Assert
		const outputElement = screen.queryByText(
			'Its good to see you Anonymous User ... How are you?',
			{ exact: false }
		)
		expect(outputElement).toBeNull()
	})
})
