import React, { useState } from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
  }

  return (
	<>
  <Box sx={{ maxWidth: 300 }} mx="auto">
    <h1>Register an account</h1>
    <form onSubmit={register} >
      <TextInput
      required
      label='Username'
      placeholder='Create a username'
      onChange={(event) => setUsername(event.target.value)}
      />
      <TextInput
      required
      type='password'
      label='Create a password'
      placeholder='Must be more than 8 characters'
      onChange={(event) => setPassword(event.target.value)}
      />
      <Group position="right" mt="md">
        <Button type="submit">Create account</Button>
      </Group>
    </form>
  </Box>
  </>
  )
}

export default Register