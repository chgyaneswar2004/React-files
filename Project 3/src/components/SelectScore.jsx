import styled from 'styled-components'
import { use, useState } from 'react';
const SelectScore = (
  {
    selectedNumber,
    setSelectedNumber,
    error,
    setError
  }
) => {
    const arr = [1, 2, 3, 4, 5, 6 ];
    const numberSelectHandler = (value) => {
      setSelectedNumber(value);
      setError("");
    }
  return (
    <SelectContainer>
      <div className='error'>{error}</div>
      <div className='select-num'>
        {arr.map((value,i)=>(
            <Box 
            isSelected = { value === selectedNumber}
            key={i}
            onClick={()=>numberSelectHandler(value)}
            >{value}</Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectContainer>
  )

}
export default SelectScore

const SelectContainer = styled.div `
    max-width: 550px;
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 30px;

    .select-num{
        display: flex;
        gap: 24px
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
      font-size: 20px;
      font-size: 400;
      color: red;
    }
`
const Box = styled.div `
    height: 72px;
    width: 72px;
    font-size: 24px;
    font-weight: 700;
    border: 2px solid black;
    background-color: white;
    color: black;
    display: grid;
    place-items: center;
    cursor: pointer;

    background-color: ${(props) => (props.isSelected?"black":"white")};
    color: ${(props) => (props.isSelected?"white":"black")};

`