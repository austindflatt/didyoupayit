import React, { useState } from 'react'
import { Button, Group, Box, Paper } from '@mantine/core';
import FormRow from '../components/FormRow';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState);

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
    <h1>Register an account</h1>
    <form onSubmit={handleSubmit}>
      <FormRow 
        type='text' 
        name='name'
        value={values.name}
        handleChange={handleChange}
      />
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
      <Group position="right" mt="md">
        <Button type="submit">Create account</Button>
      </Group>
    </form>
    </Paper>
  </Box>
  </>
  )
}

export default Register