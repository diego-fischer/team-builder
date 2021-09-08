import Form from './Form'
import { useState } from 'react'
import { Container } from './Container'

function App() {
  const [members, setMembers] = useState(null)

  return (
    <Container id='containerBeforeForm'>
      <Form members={members} setMembers={setMembers} />
    </Container>
  )
}
export default App
