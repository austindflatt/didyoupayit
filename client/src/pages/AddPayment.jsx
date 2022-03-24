import React from 'react'
import { NavBar } from '../components/NavBar'
import { Grid } from '@mantine/core';

const AddPayments = () => {
  return (
	<>
	<Grid columns={24}>
		<Grid.Col span={12}>
			<NavBar />
		</Grid.Col>
	<p>Welcome to your AddPayments</p>
	</Grid>
	</>
  )
}

export default AddPayments