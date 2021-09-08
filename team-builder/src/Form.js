import React from 'react'
import { useState } from 'react'
import { FormBox } from './FormBox'
import { Button } from './Button'
import { Header } from './Header'
import { FieldInputBox } from './FieldInputBox'
import SavedItem from './SavedItem'
import { SavedItems } from './SavedItems'
import { SplitScreen } from './SplitScreen'
import { SplitContainer } from './SplitContainer'
import { Label } from './Label'
import { Input } from './Input'
import { useEffect } from 'react'

export default function Form(props) {
  const tempInitialState = {
    name: '',
    email: '',
    role: '',
  }

  const [temp, setTemp] = useState(tempInitialState)

  const members = props.members
  const setMembers = props.setMembers
  console.log('FORM PROPS', props)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const arr = members
    arr.push(temp)
    setMembers(arr)
    setTemp(tempInitialState)
  }

  const handleChange = (evt) => {
    setTemp({ ...temp, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    console.log('TEMP (FORM LEVEL)', temp)
    console.log('MEMBERS (FORM LEVEL)', members)
  }, [temp, members])

  return (
    <React.Fragment>
      <SplitContainer id='splitContainer'>
        <SplitScreen id='splitScreenLeft'>
          <Header id='headerH1'>Add your friends!</Header>
          <FormBox
            name='form'
            id='formBox'
            onSubmit={(evt) => handleSubmit(evt)}
          >
            <FieldInputBox className='fieldInputBox'>
              <Label htmlFor='nameInput' className='label'>
                Full Name
              </Label>
              <Input
                type='text'
                id='nameInput'
                name='name'
                value={temp.name}
                onChange={(evt) => handleChange(evt)}
                className='input'
              />
            </FieldInputBox>
            <FieldInputBox className='fieldInputBox'>
              <Label htmlFor='emailInput' className='label'>
                Email
              </Label>
              <Input
                type='text'
                id='emailInput'
                name='email'
                value={temp.email}
                onChange={(evt) => handleChange(evt)}
                className='input'
              />
            </FieldInputBox>
            <FieldInputBox className='fieldInputBox'>
              <Label htmlFor='roleInput' className='label'>
                Role
              </Label>
              <Input
                type='text'
                id='roleInput'
                name='role'
                value={temp.role}
                onChange={(evt) => handleChange(evt)}
                className='input'
              />
            </FieldInputBox>

            <Button
              name='button'
              className='button'
              type='submit'
              value='Submit'
            />
          </FormBox>
        </SplitScreen>

        <SplitScreen id='splitScreenRight'>
          <SavedItems id='savedItems'>
            {members &&
              members.map((el) => (
                <SavedItem
                  name={el.name}
                  email={el.email}
                  role={el.role}
                  className='savedItem'
                />
              ))}
          </SavedItems>
        </SplitScreen>
      </SplitContainer>
    </React.Fragment>
  )
}
