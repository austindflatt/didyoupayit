import React, { useState } from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001/login`, {
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
    <h1>Login</h1>
    <form onSubmit={register} >
      <TextInput
      required
      label='Username'
      placeholder='Username'
      onChange={(event) => setUsername(event.target.value)}
      />
      <TextInput
      required
      type='password'
      label='Password'
      placeholder='Enter your password'
      onChange={(event) => setPassword(event.target.value)}
      />
      <Group position="right" mt="md">
        <Button type="submit">Login</Button>
      </Group>
    </form>
  </Box>
  </>
  )
}

export default Login