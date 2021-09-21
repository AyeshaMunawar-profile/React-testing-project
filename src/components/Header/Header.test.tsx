import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findElementByTestID } from '../../Utils/UITesting'
import Header from './Header'

const setUp = (props = { name: 'Ayesha' }) => {
	const component = shallow(<Header {...props} />)
	return component
}
// it() or test() for writing test
describe('Header Component', () => {
	let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
	beforeEach(() => {
		// default bare minimum values to render a component
		const props = { name: 'Javeria' }
		component = setUp(props)
	})
	describe('Test Static elements of the page', () => {
		it('Header should render wrapper without any errors', () => {
			// see the whole DOM tree how it is rendered
			console.log(component.debug())
			const wrapper = findElementByTestID(component, 'wrap')
			// check that number of elements with logo-image class is only 1
			expect(wrapper.length).toBe(1)
		})
		it('Header should render logo without errors', () => {
			// see the whole DOM tree how it is rendered
			console.log(component.debug())
			const headerLogo = findElementByTestID(component, 'logo-image')
			// check that number of elements with logo-image class is only 1
			expect(headerLogo.length).toBe(1)
		})
	})
})
