import styled from 'styled-components'

const RollDice = ({diceRoll, rollDice}) => {
  return (
    <DiceContainer>
      <img src={`/images/dice_${diceRoll}.png`}
      onClick={rollDice}
      />
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div `
    max-width: 250px;
    margin: 0 auto;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
        font-weight: 500;
    }
    img{
        cursor: pointer;
    }

`