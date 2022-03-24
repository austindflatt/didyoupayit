import React, { useState } from 'react'
import { Button, Group, Box, Paper, Title } from '@mantine/core';
import { FormRow, AlertBox } from '../components/index'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
	<>
  <Box sx={{ maxWidth: 400 }} mx="auto">
    <Paper radius="md" p="xl" withBorder>
    <Title order={1} style={{ width: '100px', margin: 'auto', display: 'block' }}>DYPI</Title>
    <Title order={2}>{values.isMember ? 'Login' : 'Register'}</Title>
    {values.showAlert && <><br /> <AlertBox /><br /></>}
    <form onSubmit={handleSubmit}>
      {
        !values.isMember && (
          <FormRow 
            type='text' 
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )
      }
      <FormRow 
        type='email' 
        name='email'
        value={values.email}
        handleChange={handleChange}
      />
      <FormRow 
        type='password' 
        name='password'
        value={values.password}
        handleChange={handleChange}
      />
      <Group position="center" mt="lg">
        <Button type="submit" onClick={toggleMember}>{values.isMember ? 'Not a member yet?' : 'Already a member?'}</Button>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
    </Paper>
  </Box>
  </>
  )
}

export default Register