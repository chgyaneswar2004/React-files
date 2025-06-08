import styled from 'styled-components';
import { Button } from './styled/btn';

const Startproject = ({toggle}) => {
  return (
    <Container>
      <div><img src="/images/dices.png"/></div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startproject

const Container = styled.div`
  
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

.content{
  h1{
    font-size: 96px;
    font-weight: 600;
    white-space: nowrap;
  }
  display: flex;
  flex-direction: column;
  align-items: end;
}

  
`
