import Form from './Form'
import { Container } from './Container'
import { useState, useEffect } from 'react'

function App() {
  const membersInitialState = []

  const [members, setMembers] = useState(membersInitialState)

  useEffect(() => {
    console.log('MEMBERS (APP LEVEL)', members)
  }, [members])

  return (
    <Container id='containerBeforeForm'>
      <Form members={members} setMembers={setMembers} />
    </Container>
  )
}
export default App
