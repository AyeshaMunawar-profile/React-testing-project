import React from 'react'

const Form = (props: any) => {
	const { handleChange, handleSubmit, name } = props

	return (
		<div>
			<p>
				{' '}
				Its good to see you
				{name || 'Anonymous User'} ... How are you?
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor={name}>
					Name:
					<input
						type='text'
						name='name'
						placeholder='Enter you name'
						onChange={handleChange}
						value={name || 'Unknown'}
					/>
				</label>
				<button type='submit'>Change Name</button>
			</form>
		</div>
	)
}
export default Form
