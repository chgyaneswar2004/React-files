import styled from 'styled-components'

export const Button = styled.button `
  min-width: 220px;
  padding : 10px 18px;
  font-size: 16px;
  font-weight: 500;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;


  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s background ease-in;
  }
`
export const OutlineButton = styled.button `
  min-width: 220px;
  padding : 10px 18px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s background ease-in;


  &:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    transition: 0.2s background ease-in;
  }
`