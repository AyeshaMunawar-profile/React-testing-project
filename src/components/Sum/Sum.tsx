import React, { useEffect, useState } from 'react';

const NUMBER_1 = 'Number1';
const NUMBER_2 = 'Number2';
const rxLive = /^[+-]?\d*(?:[.,]\d*)?$/;
export const calculateSum = (number1: number, number2: number) => number1 + number2;
const Sum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(calculateSum(Number(num1), Number(num2)));
  }, [num1, num2]);
  const handleChange = (event: any) => {
    const numberType = event?.target?.name;
    // eslint-disable-next-line no-unused-expressions,max-len,no-nested-ternary
    numberType === NUMBER_1 ? (rxLive.test(event?.target?.value) ? setNum1(Number(event?.target?.value))
      : setNum1(0))
    // eslint-disable-next-line no-nested-ternary
      : (numberType === NUMBER_2
        ? (rxLive.test(event?.target?.value) ? setNum2(Number(event?.target?.value)) : setNum2(0))
        : null);
  };

  return (
    <>
      <div style={{ paddingTop: '30px' }}>
        <form>
          <form>
            Enter Number 1 :
            <input name="Number1" type="text" onChange={handleChange} value={num1 || 0} aria-label="Number1" />
          </form>
          <div>
            Enter Number 2 :
            <input name="Number2" type="text" value={num2 || 0} onChange={handleChange} aria-label="Number2" />
          </div>
          <div>
            <button type="submit">Calculate Sum</button>
          </div>
          <h1>
            Sum of the two number is :
            {sum}
          </h1>
        </form>
      </div>
    </>
  );
};
export default Sum;
