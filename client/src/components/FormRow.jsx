import React from 'react'
import { TextInput } from '@mantine/core';

const FormRow = ({type, name, value, handleChange,labelText}) => {
  return (
	<>
	<TextInput
	required
	type={type}
	label={labelText || name}
	name={name}
	value={value}
	onChange={handleChange}
	/>
	</>
  )
}

export default FormRow