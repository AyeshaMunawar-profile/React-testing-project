import React from 'react'
import './Header.scss'
import Logo from '../../logo.svg'

type propType = {
	// eslint-disable-next-line react/no-unused-prop-types
	name: string
}
// eslint-disable-next-line no-unused-vars
const Header = (props: propType) => (
	<>
		<header className='header'>
			<div className='wrap'>
				<div className='logo'>
					<img src={Logo} alt='logo' className='logo-image' />
				</div>
			</div>
		</header>
	</>
)
export default Header
