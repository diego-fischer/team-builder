import React from 'react'
import { useState } from 'react'
import { FormBox } from './FormBox'
import { Button } from './Button'
import { Header } from './Header'
import { FieldInputBox } from './FieldInputBox'
import { SavedItem } from './SavedItem'
import { SavedItems } from './SavedItems'
import { SplitScreen } from './SplitScreen'
import { SplitContainer } from './SplitContainer'
import { Label } from './Label'
import { Input } from './Input'
import { useEffect } from 'react'

export default function Form(props) {
  const initialState = {
    name: '',
    email: '',
    role: '',
  }
  const [temp, setTemp] = useState(initialState)

  const members = props.members
  const setMembers = props.setMembers
  console.log('members is now...', members)
  console.log('setMembers is Now...', setMembers)

  const handleSubmit = (evt) => {
    debugger
    console.log('DEFAULT BEHAVIOR HAS BEEN PREVENTED')
    setMembers(...members, temp)
    // evt.preventDefault()
  }

  const handleChange = (evt) => {
    evt.preventDefault()
    setTemp({ ...temp, [evt.target.id]: evt.target.value })
  }

  useEffect(() => {
    console.log('TEMP', temp)
  }, [temp])

  useEffect(() => {
    console.log('MEMBERS', members)
  }, [members])

  useEffect(() => {
    console.log('PROPS', props)
  }, [props])

  return (
    <React.Fragment>
      <SplitContainer id='splitContainer'>
        <SplitScreen id='splitScreenLeft'>
          <Header id='headerH1'>Add your friends!</Header>
          <FormBox
            name='form'
            id='formBox'
            onSubmit={(event) => handleSubmit(event)}
          >
            <FieldInputBox className='fieldInputBox'>
              <Label for='name' className='label'>
                Full Name
              </Label>
              <Input
                type='text'
                id='name'
                name='name'
                value={temp.name}
                onChange={(evt) => handleChange(evt)}
                className='input'
              />
            </FieldInputBox>
            <FieldInputBox className='fieldInputBox'>
              <Label for='email' className='label'>
                Email
              </Label>
              <Input
                type='text'
                id='email'
                name='email'
                value={temp.email}
                onChange={(evt) => handleChange(evt)}
                className='input'
              />
            </FieldInputBox>
            <FieldInputBox className='fieldInputBox'>
              <Label for='role' className='label'>
                Role
              </Label>
              <Input
                type='text'
                id='role'
                name='role'
                value={temp.role}
                onChange={(evt) => handleChange(evt)}
                className='input'
              />
            </FieldInputBox>

            <Button
              type='submit'
              name='button'
              onSubmit={(evt) => handleSubmit(evt)}
              className='button'
            >
              Submit
            </Button>
          </FormBox>
        </SplitScreen>

        <SplitScreen id='splitScreenRight'>
          <SavedItems id='savedItems'>
            <h1>Saved Friends</h1>
            <SavedItem className='savedItem'>{members} 1</SavedItem>
          </SavedItems>
        </SplitScreen>
      </SplitContainer>
    </React.Fragment>
  )
}
