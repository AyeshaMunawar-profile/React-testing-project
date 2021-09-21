export const findElementByTestID = (component: any, attribute: string) => {
	const wrapper = component.find(`[data-test='${attribute}']`)
	return wrapper
}
export const findElementByClassName = (component: any, className: string) => {
	const wrapper = component.find(`.${className}`)
	return wrapper
}
