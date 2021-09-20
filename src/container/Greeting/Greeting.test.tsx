import React from 'react'
import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting Component', () => {
	test('Renders Hello World as a text', () => {
		// Arrange
		render(<Greeting />)
		// Act
		// ... Nothing

		// Assert
		// look into virtual DOM select element by text

		const helloWorldElement = screen.getByText('Hello World !', { exact: true })

		expect(helloWorldElement).toBeInTheDocument()
	})
})
