import { useEffect, useState } from "react";
const NUMBER_1 = "Number1";
const NUMBER_2 = "Number2";
const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
export const calculateSum = (number1, number2) => {
	return number1 + number2;
}
const Sum = () => {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [sum, setSum] = useState(0);
	useEffect(() => {
		setSum(calculateSum(Number(num1), Number(num2)));
	}, [num1, num2])
	const handleChange = (event) => {
		const numberType = event?.target?.name;
		// eslint-disable-next-line no-unused-expressions
		numberType === NUMBER_1 ? (rx_live.test(event?.target?.value) ? setNum1(Number(event?.target?.value)) :
			setNum1(0)) :
			(numberType === NUMBER_2 ?
				(rx_live.test(event?.target?.value) ? setNum2(Number(event?.target?.value)) : setNum2(0)) :
				null);
	}

	return (
		<>
			<div style={{ paddingTop: "30px" }}>
				<form>
					<div>
						<label htmlFor="Number1">Enter Number 1 :</label>
						<input name="Number1" type="text" onChange={handleChange} value={num1 ? num1 : 0} aria-label="Number1"></input>
					</div>
					<div>
						<label htmlFor="Number2">Enter Number 2 :</label>
						<input name="Number2" type="text" value={num2 ? num2 : 0} onChange={handleChange} aria-label="Number2"></input>
					</div>
					<div>
						<button>Calculate Sum</button>
					</div>
					<h1>Sum of the two number is : {sum}</h1>
				</form>
			</div>
		</>
	)
}
export default Sum;