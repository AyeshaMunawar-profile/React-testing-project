import React from 'react'
import './Header.scss'
import Logo from '../../logo.svg'

type propType = {
	// eslint-disable-next-line react/no-unused-prop-types
	name: string
}
// eslint-disable-next-line no-unused-vars
const Header = ({ name }: propType) => (
	<>
		<header className='header' data-test='header'>
			<div className='wrap' data-test='wrap'>
				<div className='logo' data-test='logo'>
					<img
						src={Logo}
						alt='logo'
						className='logo-image'
						data-test='logo-image'
					/>
				</div>
				<h1 className='title' data-test='title'>
					{name}
				</h1>
			</div>
		</header>
	</>
)
export default Header
