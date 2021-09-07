import './App.css'
import Form from './Form'
import { useState } from 'react'

function App() {
  const [members, setMembers] = useState(null)

  return <Form members={members} setMembers={setMembers} />
}
export default App
