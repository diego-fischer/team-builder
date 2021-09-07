import React from 'react'
import { useState } from 'react'
import { FormBox } from './FormBox'
import { Button } from './Button'

export default function Form(props) {
  const members = props.members
  const setMembers = props.setMembers
  const initialState = {
    name: '',
    email: '',
    role: '',
  }

  const [temp, setTemp] = useState(initialState)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setMembers(...members, temp)
    setTemp(initialState)
  }

  const handleChange = (evt) => {
    setTemp({ ...temp, [evt.target.id]: evt.target.value })
    console.log('TEMP', temp)
  }

  return (
    <React.Fragment>
      <FormBox onSubmit={(event) => handleSubmit(event)}>
        <label for='name'>Full Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={temp.name}
          onChange={(evt) => handleChange(evt)}
        />
        <label for='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          value={temp.email}
          onChange={(evt) => handleChange(evt)}
        />
        <label for='role'>Role</label>
        <input
          type='text'
          id='role'
          name='role'
          value={temp.role}
          onChange={(evt) => handleChange(evt)}
        />

        <Button type='button' onSubmit={(event) => handleSubmit()}>
          Submit
        </Button>
      </FormBox>
    </React.Fragment>
  )
}
