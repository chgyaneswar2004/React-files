import { useState } from 'react';
import styled from 'styled-components'
import TotalScore from '../TotalScore';
import SelectScore from './SelectScore';
import RollDice from './RollDice';
import Rules from './Rules';
import { Button, OutlineButton } from './styled/btn';

const Gameplay = () => {

  const[diceRoll, setDiceRoll] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState();
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const genRandomNum = (min, max) =>{
    return (Math.floor(Math.random() * (max - min) + min));
  }

  const rollDice = () => {
    if(!selectedNumber){
    setError("You have not selected any number");
    return;
    }

    const randomNumber = genRandomNum(1, 7);
    setDiceRoll((prev) => randomNumber);
    if(selectedNumber === randomNumber){
      setScore((prev)=>prev + randomNumber);
    }
    else{
      setScore((prev)=>prev -2);
    }
    setSelectedNumber(undefined);
  }
  const resetScore = () => {
    setScore(0);
  }
  return (
    <MainContainer>
      <div className='top-sec'>
        <TotalScore score={score}/>
        <SelectScore error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice diceRoll={diceRoll} rollDice={rollDice}/>
     <div className='btns'>
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules((prev) =>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
     </div>
     {showRules&&<Rules/>}
    </MainContainer>
  )
}

export default Gameplay;

const MainContainer = styled.main`
    max-width: 1180px;
    margin: 0 auto;

    .top-sec{
        width: 100%;
        height: 150px;
        margin-top: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`